#!/bin/bash
# Creates a ZIP for deployment on cPanel (moon folder).
# Usage: ./create-deploy-zip.sh
# Requires: npm run build already run ( .next/standalone and .next/static must exist).

set -e
cd "$(dirname "$0")"

echo "Checking build..."
if [ ! -f ".next/standalone/server.js" ]; then
  echo "✗ Missing .next/standalone/server.js - run first: npm run build"
  exit 1
fi
if [ ! -d ".next/static" ]; then
  echo "✗ Missing .next/static - run first: npm run build"
  exit 1
fi
echo "✓ Build OK"

echo ""
echo "Checking environment variables..."
if [ ! -f ".env.local" ]; then
  echo "⚠️  WARNING: .env.local not found"
  echo "   The contact form will NOT work without SMTP variables."
  echo "   You can:"
  echo "   1. Create .env.local with SMTP credentials (recommended)"
  echo "   2. Or set the variables manually in cPanel after deploy"
  echo ""
  read -p "Continue without .env.local? (y/N): " -n 1 -r
  echo ""
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deploy cancelled. Create .env.local and run the script again."
    exit 1
  fi
  INCLUDE_ENV=false
else
  echo "✓ .env.local found - will be included in the ZIP"
  INCLUDE_ENV=true
fi

# Remove previous deployment ZIPs
if ls new-moon-deploy-*.zip 1>/dev/null 2>&1; then
  echo "Removing previous builds..."
  rm -f new-moon-deploy-*.zip
  echo "✓ Done"
fi

ZIP_NAME="new-moon-deploy-$(date +%Y%m%d-%H%M%S).zip"
echo ""
echo "Creating $ZIP_NAME ..."

# Include everything needed. Do NOT include node_modules (CloudLinux uses virtual env).
if [ "$INCLUDE_ENV" = true ]; then
  zip -r "$ZIP_NAME" \
    .htaccess \
    .env.local \
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
else
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
fi

echo ""
echo "   - .htaccess"
if [ "$INCLUDE_ENV" = true ]; then
  echo "   - .env.local (SMTP environment variables)"
fi
echo "   - package.json, start-server.js, next.config.js, tsconfig.json"
echo "   - .next/standalone + .next/static"
echo "   - app/, components/, lib/, public/"
echo ""
if [ "$INCLUDE_ENV" = true ]; then
  echo "✅ ZIP includes .env.local - Contact form will work automatically"
  echo ""
fi
echo "📤 Next step: Upload $ZIP_NAME to cPanel in the moon folder and extract it."
echo "   Then: Setup Node.js App → Restart App"
echo ""
