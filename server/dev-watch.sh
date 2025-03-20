#!/bin/bash

# Kill any existing processes on ports 4002 and 3002
echo "Cleaning up any existing processes..."
lsof -ti:4002 | xargs kill -9 2>/dev/null || true
lsof -ti:3002 | xargs kill -9 2>/dev/null || true

echo "Starting server with auto-reload..."

# Start nodemon server with delay to ensure clean restart
(pnpm run dev) &
SERVER_PID=$!

# Wait a moment to let the server start
sleep 2

# Start browser-sync with more comprehensive file watching
(./node_modules/.bin/browser-sync start \
  --proxy 'localhost:4002' \
  --files 'src/**/*.ts,dist/**/*.*' \
  --port 3002 \
  --no-notify \
  --reload-delay 1000 \
  --no-ui) &
BROWSER_SYNC_PID=$!

echo "Server running at http://localhost:4002"
echo "Browser-sync running at http://localhost:3002"
echo "Browser-sync is watching for changes and will auto-reload"
echo "Press Ctrl+C to stop both processes"

# Handle termination
trap "kill $SERVER_PID $BROWSER_SYNC_PID 2>/dev/null || true; exit" INT TERM EXIT

# Wait for any process to exit
wait