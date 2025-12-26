'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    if (!mapRef.current || !GOOGLE_MAPS_API_KEY) {
      setMapError(true)
      return
    }

    const initMap = () => {
      if (!window.google || !window.google.maps || !mapRef.current) {
        setMapError(true)
        return
      }

      try {
        const bogotaLocation = { lat: 4.6915, lng: -74.0486 }
        
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 16,
          center: bogotaLocation,
          scrollwheel: false,
          styles: [
            {
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#616161' }]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9c9c9' }]
            }
          ]
        })

        const marker = new window.google.maps.Marker({
          position: bogotaLocation,
          map: map,
          title: 'New Moon Psicología en Evolución',
          animation: window.google.maps.Animation.DROP
        })

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h4 style="margin: 0 0 10px 0; color: #1e3a5f;">New Moon Psicología en Evolución</h4>
              <p style="margin: 0; color: #666;">
                Calle 103 # 14a-53, Of. 303<br/>
                Edificio Bogotá Business Center<br/>
                Bogotá, Colombia
              </p>
              <a href="https://maps.app.goo.gl/Sd3o52KcQo84pDrb6" target="_blank" rel="noopener noreferrer" style="color: #ff6b35; text-decoration: none; margin-top: 10px; display: inline-block;">
                Ver en Google Maps →
              </a>
            </div>
          `
        })

        marker.addListener('click', () => {
          infoWindow.open(map, marker)
        })

        infoWindow.open(map, marker)
        setMapError(false)
      } catch (error) {
        console.error('Error initializing map:', error)
        setMapError(true)
      }
    }

    const loadMapScript = () => {
      if (window.google && window.google.maps) {
        initMap()
        return
      }

      window.initMap = initMap
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places`
      script.async = true
      script.defer = true
      script.onerror = () => {
        setMapError(true)
      }
      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
        if ('initMap' in window) {
          delete (window as any).initMap
        }
      }
    }

    loadMapScript()
  }, [])

  if (mapError) {
    return (
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          minHeight: '500px',
          borderRadius: '10px',
          background: '#f8f9fa',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🗺️</div>
        <h4 style={{ color: '#1e3a5f', marginBottom: '1rem' }}>Mapa no disponible</h4>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          No pudimos cargar el mapa en este momento. Por favor, usa el enlace a continuación para ver nuestra ubicación.
        </p>
        <a 
          href="https://maps.app.goo.gl/Sd3o52KcQo84pDrb6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2"
          style={{ borderRadius: '8px', fontWeight: '600' }}
        >
          Ver en Google Maps 🗺️
        </a>
        <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '1rem' }}>
          Calle 103 # 14a-53, Of. 303<br/>
          Edificio Bogotá Business Center<br/>
          Bogotá, Colombia
        </p>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      id="map" 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '500px',
        borderRadius: '10px'
      }} 
    />
  )
}

