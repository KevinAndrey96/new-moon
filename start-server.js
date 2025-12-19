#!/usr/bin/env node

// Wrapper script to start Next.js standalone server
// This ensures the server runs from the correct directory

const { spawn } = require('child_process');
const path = require('path');

// Get the directory where this script is located
const scriptDir = __dirname;
const serverPath = path.join(scriptDir, '.next', 'standalone', 'server.js');

// Change to the script directory
process.chdir(scriptDir);

// Get port from environment or use default
const port = process.env.PORT || 3000;

// Set environment variables
process.env.PORT = port;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Start the server
const server = spawn('node', [serverPath], {
  stdio: 'inherit',
  env: process.env,
  cwd: scriptDir
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  process.exit(code);
});

// Handle termination
process.on('SIGTERM', () => {
  server.kill('SIGTERM');
});

process.on('SIGINT', () => {
  server.kill('SIGINT');
});

