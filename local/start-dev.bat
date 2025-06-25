@echo off
chcp 65001 >nul

echo �� Cars Racing Game - Local Development Environment
echo ===================================================
echo.

REM Check if Docker is running
echo 🔍 Checking Docker status...
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running! Please start Docker first.
    pause
    exit /b 1
)
echo ✅ Docker is running!
echo.

REM Check if we're in the right directory
if not exist "docker-compose.yml" (
    echo ❌ docker-compose.yml not found! Please run this from the local/ directory.
    pause
    exit /b 1
)

REM Check if parent directory has the source code
if not exist "..\package.json" (
    echo ❌ package.json not found in parent directory! Please run this from the local/ directory.
    pause
    exit /b 1
)

echo 🏗️ Building and starting local development environment...
echo 📝 This will:
echo    • Install all dependencies
echo    • Build TypeScript files
echo    • Start the development server
echo    • Enable hot reloading
echo    • Mount source code from parent directory
echo.

REM Start the development environment
echo 🚀 Starting development server...
docker compose up --build

echo.
echo 🎉 Local development environment is ready!
echo 🌐 Open your browser and go to: http://localhost:3000
echo 📝 Your code changes will automatically reload!
echo 🛑 Press Ctrl+C to stop the development environment
pause 