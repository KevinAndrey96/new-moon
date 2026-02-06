#!/bin/bash
# Crea un ZIP para desplegar en cPanel (carpeta moon).
# Uso: ./create-deploy-zip.sh
# Requiere: npm run build ya ejecutado (existe .next/standalone y .next/static).

set -e
cd "$(dirname "$0")"

echo "Verificando build..."
if [ ! -f ".next/standalone/server.js" ]; then
  echo "✗ Falta .next/standalone/server.js - ejecuta antes: npm run build"
  exit 1
fi
if [ ! -d ".next/static" ]; then
  echo "✗ Falta .next/static - ejecuta antes: npm run build"
  exit 1
fi
echo "✓ Build OK"

# Eliminar ZIPs de despliegue anteriores
if ls new-moon-deploy-*.zip 1>/dev/null 2>&1; then
  echo "Eliminando builds anteriores..."
  rm -f new-moon-deploy-*.zip
  echo "✓ Listo"
fi

ZIP_NAME="new-moon-deploy-$(date +%Y%m%d-%H%M%S).zip"
echo ""
echo "Creando $ZIP_NAME ..."

# Incluir todo lo necesario. NO incluir node_modules (CloudLinux usa entorno virtual).
zip -r "$ZIP_NAME" \
  .htaccess \
  package.json \
  start-server.js \
  next.config.js \
  tsconfig.json \
  .next/standalone \
  .next/static \
  app \
  components \
  lib \
  public \
  -x "*.DS_Store" \
  -x "node_modules/*" \
  -x ".next/cache/*"

echo ""
echo "   - .htaccess"
echo "   - package.json, start-server.js, next.config.js, tsconfig.json"
echo "   - .next/standalone + .next/static"
echo "   - app/, components/, lib/, public/"
echo ""
echo "📤 Siguiente paso: Sube $ZIP_NAME a cPanel en la carpeta moon y descomprímelo."
echo "   Luego: Setup Node.js App → Restart App"
echo ""
