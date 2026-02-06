# Guía de despliegue en cPanel (Moon / New Moon Psicología)

## 1. En tu computadora

### 1.1 Generar el build

En la raíz del proyecto:

```bash
npm run build
```

Espera a que termine. Debe existir `.next/standalone/server.js` y `.next/static/`.

### 1.2 Generar el ZIP

```bash
./create-deploy-zip.sh
```

Se crea un archivo como `new-moon-deploy-YYYYMMDD-HHMMSS.zip`. Este ZIP contiene todo lo necesario (incluida la carpeta `.next/`); **no** incluye `node_modules`.

---

## 2. En cPanel

### 2.1 Limpiar y descomprimir el ZIP

1. Entra al **Administrador de archivos** (File Manager) en cPanel.
2. Ve a la carpeta donde vive la app. Si usas **Application root: moon**, entra a la carpeta **`moon`** (p. ej. `public_html/moon` o `moon` en tu home).
3. **Borra todo** lo que haya dentro de esa carpeta, incluido el `.htaccess` si existía. (El ZIP trae el `.htaccess` que necesita el proyecto.)
4. Sube el archivo **`new-moon-deploy-YYYYMMDD-HHMMSS.zip`** a esa misma carpeta (p. ej. dentro de `moon`).
5. Clic derecho sobre el ZIP → **Extract** (Extraer).
6. Comprueba que, al descomprimir, queden en esa carpeta: `.htaccess`, `.next/`, `app/`, `components/`, `lib/`, `public/`, `package.json`, `start-server.js`, etc. Si el ZIP creó una subcarpeta al extraer, mueve su contenido un nivel arriba para que esté en la raíz de la app.

**Estructura objetivo** (carpeta de la app, ej. `moon/`):

```
moon/
  .htaccess
  .next/
    standalone/
      server.js
    static/
  app/
  components/
  lib/
  public/
  package.json
  start-server.js
  next.config.js
  tsconfig.json
```

---

## 3. Crear / configurar la aplicación Node.js en cPanel

1. En cPanel, abre **Node.js** (o “Setup Node.js App” / “Application Manager”).
2. Si ya existe la app “moon”, edítala; si no, **Create application**.
3. Configura así:

| Campo | Valor |
|-------|--------|
| **Node.js version** | `22.18.0` (o la 22 que ofrezca) |
| **Application mode** | `Production` (recomendado; en la captura aparece Development) |
| **Application root** | `moon` (ruta relativa a tu home, ej. `moon` o `public_html/moon` según tu estructura) |
| **Application URL** | `nmpsicologiaenevolucion.com` |
| **Application startup file** | `start-server.js` |
| **Passenger log file** | Opcional; si lo usas, algo como `/mnt/jupiter/nmpsicologia/logs/passenger.log` |

4. Guarda la configuración (Save / Update).

### 3.1 Instalar dependencias en el servidor (Run NPM Install)

1. En la misma pantalla de la app **moon**, usa el botón **Run NPM Install** (o “Run NPM Install” cuando aparezca).
2. Espera a que termine (“Installing NPM...”); CloudLinux instalará las dependencias en el entorno virtual y creará el enlace `node_modules` en la raíz de la app.
3. No ejecutes `npm install` a mano en la raíz de la app; usa solo esta opción de cPanel.

### 3.2 Variables de entorno (opcional)

En **Environment variables** agrega las que necesites, por ejemplo:

- `NODE_ENV=production` (si no se define por Application mode).
- Las que use tu app: SMTP, Analytics, etc. (según tu `.env.local.example`).

### 3.3 Arrancar la app

- Pulsa **RESTART** (o **Start** si estaba detenida).
- Comprueba que el estado sea “Running” o similar.

---

## 4. Comprobar

- Abre **https://nmpsicologiaenevolucion.com** en el navegador.
- Si ves 503 o error de Passenger, revisa el **Passenger log file** que configuraste o los logs de la aplicación Node en cPanel.

---

## Resumen rápido

| Paso | Dónde | Acción |
|------|--------|--------|
| 1 | Local | `npm run build` |
| 2 | Local | `./create-deploy-zip.sh` |
| 3 | cPanel File Manager | Borrar todo en `public_html` (incl. `.htaccess`), subir ZIP y extraer; dejar archivos en la carpeta de la app (ej. `moon`) |
| 4 | cPanel Node.js | Crear/editar app: root `moon`, URL del dominio, startup `start-server.js`, Node 22 |
| 5 | cPanel Node.js | Run NPM Install |
| 6 | cPanel Node.js | Restart App |
