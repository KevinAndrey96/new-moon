#!/usr/bin/env node

// Debug version - shows detailed information
const path = require('path');
const fs = require('fs');

console.log('=== Next.js Debug Startup ===');
console.log('Current directory:', __dirname);
console.log('Working directory:', process.cwd());
console.log('Node version:', process.version);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('All env vars:', Object.keys(process.env).filter(k => k.includes('PASSENGER') || k.includes('NODE') || k.includes('PORT')).map(k => `${k}=${process.env[k]}`).join('\n'));
console.log('');

// Get the directory where this script is located
const scriptDir = __dirname;

// Change to the script directory
try {
  process.chdir(scriptDir);
  console.log('Changed to directory:', process.cwd());
} catch (error) {
  console.error('Error changing directory:', error);
  process.exit(1);
}

// Set environment variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Passenger provides PORT automatically, don't override it
if (!process.env.PORT) {
  process.env.PORT = process.env.PASSENGER_APP_ENV?.PORT || 3001;
}

console.log('Final PORT:', process.env.PORT);
console.log('');

// Verify required files exist
const serverPath = path.join(scriptDir, '.next', 'standalone', 'server.js');
const staticPath = path.join(scriptDir, '.next', 'static');
const publicPath = path.join(scriptDir, 'public');
const packageJsonPath = path.join(scriptDir, 'package.json');

console.log('Checking files...');
console.log('  server.js:', fs.existsSync(serverPath) ? '✓ EXISTS' : '✗ NOT FOUND');
console.log('  .next/static:', fs.existsSync(staticPath) ? '✓ EXISTS' : '✗ NOT FOUND');
console.log('  public:', fs.existsSync(publicPath) ? '✓ EXISTS' : '✗ NOT FOUND');
console.log('  package.json:', fs.existsSync(packageJsonPath) ? '✓ EXISTS' : '✗ NOT FOUND');
console.log('');

if (!fs.existsSync(serverPath)) {
  console.error('ERROR: .next/standalone/server.js not found');
  console.error('Path checked:', serverPath);
  console.error('');
  console.error('Directory structure:');
  try {
    const nextDir = path.join(scriptDir, '.next');
    if (fs.existsSync(nextDir)) {
      console.error('  .next/ exists');
      const standaloneDir = path.join(nextDir, 'standalone');
      if (fs.existsSync(standaloneDir)) {
        console.error('  .next/standalone/ exists');
        const files = fs.readdirSync(standaloneDir);
        console.error('  Files in standalone:', files.join(', '));
      } else {
        console.error('  .next/standalone/ NOT FOUND');
      }
    } else {
      console.error('  .next/ NOT FOUND');
    }
  } catch (e) {
    console.error('  Error reading directory:', e.message);
  }
  process.exit(1);
}

if (!fs.existsSync(staticPath)) {
  console.error('ERROR: .next/static not found');
  console.error('Path checked:', staticPath);
  process.exit(1);
}

if (!fs.existsSync(publicPath)) {
  console.error('WARNING: public/ directory not found');
}

// Set Next.js specific environment variables
process.env.NEXT_RUNTIME = 'nodejs';

console.log('Attempting to load server...');
console.log('Server path:', serverPath);
console.log('');

// Load and run the Next.js standalone server directly
try {
  console.log('Requiring server.js...');
  require(serverPath);
  console.log('Server loaded successfully!');
} catch (error) {
  console.error('ERROR loading server:');
  console.error('  Message:', error.message);
  console.error('  Stack:', error.stack);
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('');
    console.error('Module not found. This usually means:');
    console.error('  1. Dependencies are missing');
    console.error('  2. node_modules is not in .next/standalone/');
    console.error('  3. Build was incomplete');
    console.error('');
    console.error('Try running "npm run build" locally and re-uploading.');
  }
  process.exit(1);
}
