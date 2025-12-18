# New Moon Psicología en Evolución - Sitio Web

Sitio web profesional desarrollado con Next.js para New Moon Psicología en Evolución.

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
Moon/
├── app/                    # Páginas y layouts (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── contact/           # Página de contacto
│   └── colegios/          # Página para colegios
├── components/            # Componentes reutilizables
│   ├── Header.tsx        # Header y navegación
│   └── Footer.tsx       # Footer
├── public/               # Archivos estáticos
│   ├── css/             # Estilos CSS
│   ├── js/              # Scripts JavaScript
│   ├── images/          # Imágenes
│   └── fonts/           # Fuentes
└── website/             # Archivos HTML originales (referencia)
```

## 🌐 Despliegue en cPanel

### Opción 1: Standalone Build (Recomendado)

Next.js puede generar un build standalone que funciona perfectamente en cPanel con Node.js:

1. **Configurar next.config.js** (ya está configurado):
   ```js
   output: 'standalone'
   ```

2. **Crear el build**:
   ```bash
   npm run build
   ```

3. **Subir archivos a cPanel**:
   - Sube toda la carpeta `.next/standalone/` a tu servidor
   - Sube la carpeta `.next/static/` a `.next/static/` en el servidor
   - Sube la carpeta `public/` a `public/` en el servidor

4. **Configurar Node.js App en cPanel**:
   - Ve a "Setup Node.js App" en cPanel
   - Crea una nueva aplicación Node.js
   - Establece:
     - **Node.js version**: 18.x o superior
     - **Application root**: `/tu-dominio/`
     - **Application URL**: `/`
     - **Application startup file**: `server.js`
   - En "Application startup file", apunta a `.next/standalone/server.js`

5. **Variables de entorno** (si las necesitas):
   - En cPanel, agrega variables de entorno si es necesario
   - `NODE_ENV=production`

6. **Iniciar la aplicación**:
   - Haz clic en "Run NPM Install" si es necesario
   - Haz clic en "Restart App"

### Opción 2: Export Estático (Más Simple)

Si prefieres un sitio completamente estático:

1. **Modificar next.config.js**:
   ```js
   output: 'export',
   images: {
     unoptimized: true
   }
   ```

2. **Crear el build**:
   ```bash
   npm run build
   ```

3. **Subir archivos**:
   - Sube todo el contenido de la carpeta `out/` a la carpeta `public_html/` de tu cPanel
   - Esto generará HTML estático puro, sin necesidad de Node.js

### Estructura de Carpetas en cPanel

Para la opción standalone:
```
public_html/
├── .next/
│   ├── standalone/
│   │   └── server.js
│   └── static/
├── public/
└── package.json
```

Para la opción estática:
```
public_html/
├── index.html
├── contact/
├── colegios/
└── _next/
```

## 🔧 Configuración Adicional

### Variables de Entorno

Crea un archivo `.env.local` para variables de entorno (opcional):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### SEO

El sitio ya incluye:
- Meta tags optimizados
- Sitemap (puedes generar uno automático)
- Schema.org markup (puedes agregarlo)

### Analytics

Para agregar Google Analytics, edita `app/layout.tsx` y agrega el script de GA.

## 📝 Notas

- Los archivos originales HTML están en la carpeta `website/` como referencia
- Los assets (CSS, JS, imágenes) están en `public/`
- Los componentes reutilizables están en `components/`
- Las páginas están en `app/` usando el App Router de Next.js 14

## 🆘 Solución de Problemas

### Error: "Cannot find module"
- Ejecuta `npm install` nuevamente
- Verifica que todas las dependencias estén instaladas

### Error: "Port 3000 already in use"
- Cambia el puerto: `npm run dev -- -p 3001`

### Problemas con rutas en cPanel
- Verifica que la configuración de Node.js App esté correcta
- Asegúrate de que el archivo `server.js` esté en la ruta correcta

## 📞 Soporte

Para más información sobre Next.js, visita [nextjs.org/docs](https://nextjs.org/docs)

