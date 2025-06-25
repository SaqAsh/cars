@echo off
chcp 65001 >nul

echo 🚗 Cars Racing Game - Production Environment
echo =============================================
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
    echo ❌ docker-compose.yml not found! Please run this from the prod/ directory.
    pause
    exit /b 1
)

REM Check if parent directory has the source code
if not exist "..\package.json" (
    echo ❌ package.json not found in parent directory! Please run this from the prod/ directory.
    pause
    exit /b 1
)

echo 🏗️ Building and starting production environment...
echo 📝 This will:
echo    • Build optimized production image
echo    • Start production server in background
echo    • Enable health checks
echo    • Run with production optimizations
echo.

REM Start the production environment
echo 🚀 Starting production server...
docker compose up --build -d

REM Wait a moment for the container to start
echo ⏳ Waiting for server to start...
timeout /t 3 /nobreak >nul

REM Check if the container is running
docker compose ps | findstr "Up" >nul
if %errorlevel% equ 0 (
    echo ✅ Production server is running!
    echo.
    echo 🎉 Production environment is ready!
    echo 🌐 Open your browser and go to: http://localhost:3000
    echo.
    echo 📊 Useful commands:
    echo    • View logs: docker compose logs -f
    echo    • Stop server: docker compose down
    echo    • Check status: docker compose ps
) else (
    echo ❌ Failed to start production server
    echo 📊 Check logs: docker compose logs
    pause
    exit /b 1
)

pause 