# 🚗 Cars Racing Game - Local Development

This folder contains local development files for the Cars Racing Game.

## 🚀 Quick Start

### Using the Development Scripts

**Windows:**
```cmd
start-dev.bat
```

**macOS/Linux:**
```bash
./start-dev.sh
```

### Using Docker Compose Directly

```bash
# Start development with hot reloading
docker compose up --build

# Start in background
docker compose up -d

# View logs
docker compose logs -f

# Stop development
docker compose down
```

## 📁 What's Included

- `docker-compose.yml` - Development-only compose file
- `start-dev.sh` - Development startup script (Unix/Linux/macOS)
- `start-dev.bat` - Development startup script (Windows)

## 🔧 Development Features

- **Hot Reloading**: Your code changes automatically reload
- **Volume Mounting**: Source code is mounted from your local machine
- **Port Mapping**: Access at `http://localhost:3000`
- **Progress Indicators**: Clear feedback during build process
- **No Build Step**: Just edit and save - changes appear instantly

## 🌐 Access

Once running, access the application at: **http://localhost:3000**

## 📝 Development Workflow

1. **Start Development**: `./start-dev.sh` or `start-dev.bat`
2. **Edit Code**: Make changes in `../src/` or `../public/`
3. **See Changes**: Automatically reloaded in browser
4. **Stop**: `Ctrl+C` or `docker compose down`

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

# Rebuild (if dependencies change)
docker compose up --build
```

## 🔄 Hot Reloading

The development environment automatically:
- Watches for file changes in `../src/` and `../public/`
- Reloads the server when TypeScript files change
- Updates the browser when frontend files change
- Shows build progress and errors in real-time 