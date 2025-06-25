# 🚗 Cars Racing Game - Production

This folder contains production deployment files for the Cars Racing Game.

## 🚀 Quick Start

### Using the Production Scripts

**Windows:**
```cmd
start-prod.bat
```

**macOS/Linux:**
```bash
./start-prod.sh
```

### Using Docker Compose Directly

```bash
# Build and start production
docker compose up --build -d

# View logs
docker compose logs -f

# Stop production
docker compose down

# Check status
docker compose ps
```

## 📁 What's Included

- `docker-compose.yml` - Production-only compose file
- `start-prod.sh` - Production startup script (Unix/Linux/macOS)
- `start-prod.bat` - Production startup script (Windows)

## 🔧 Production Features

- **Optimized Build**: Multi-stage Docker build for smaller images
- **Health Checks**: Container health monitoring
- **Background Running**: Runs in detached mode
- **Production Environment**: Optimized for performance
- **Status Verification**: Confirms server is running

## 🌐 Access

Once running, access the application at: **http://localhost:3000**

## 📊 Useful Commands

```bash
# View logs
docker compose logs -f

# Stop server
docker compose down

# Check status
docker compose ps

# Restart
docker compose restart
``` 