# 🚗 Cars Racing Game - Docker Setup

This project uses Docker for brainless, portable development! You can develop from any computer that has Docker installed, using standard Docker commands with a great user experience.

## 📁 Project Structure

```
cars/
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Main compose file (profiles)
├── .dockerignore          # Docker build optimization
├── README-Docker.md       # This file
├── local/                 # Local development files
│   ├── docker-compose.yml # Development-only compose
│   ├── start-dev.sh       # Development script (Unix)
│   ├── start-dev.bat      # Development script (Windows)
│   └── README.md          # Local development guide
└── prod/                  # Production deployment files
    ├── docker-compose.yml # Production-only compose
    ├── start-prod.sh      # Production script (Unix)
    ├── start-prod.bat     # Production script (Windows)
    └── README.md          # Production deployment guide
```

## 🚀 Quick Start

### Prerequisites
- [Docker](https://www.docker.com/) installed and running
- That's it! No Node.js, npm, or TypeScript installation needed on your machine

### 🎯 **Super Easy Start (Recommended)**

**Local Development:**
```bash
# Navigate to local folder
cd local

# Windows
start-dev.bat

# macOS/Linux
./start-dev.sh
```

**Production Deployment:**
```bash
# Navigate to prod folder
cd prod

# Windows
start-prod.bat

# macOS/Linux
./start-prod.sh
```

### 🔧 **Standard Docker Commands**

**From Root Directory:**
```bash
# Development (Hot Reload)
docker compose --profile dev up --build

# Production Build
docker compose --profile prod up --build -d

# Stop Services
docker compose down
```

**From Local Folder:**
```bash
cd local
docker compose up --build
```

**From Prod Folder:**
```bash
cd prod
docker compose up --build -d
```

## 📁 What's Included

### Root Files:
- `Dockerfile` - Multi-stage build with progress indicators
- `docker-compose.yml` - Unified compose file with profiles and labels
- `.dockerignore` - Optimizes build performance

### Local Development (`local/`):
- `docker-compose.yml` - Development-only compose file
- `start-dev.sh` / `start-dev.bat` - Development with clear feedback
- `README.md` - Local development guide

### Production (`prod/`):
- `docker-compose.yml` - Production-only compose file
- `start-prod.sh` / `start-prod.bat` - Production with status checks
- `README.md` - Production deployment guide

## 🎨 Enhanced User Experience

### What You'll See:
```
🚗 Cars Racing Game - Development Environment
==============================================

🔍 Checking Docker status...
✅ Docker is running!

🏗️ Building and starting development environment...
📝 This will:
   • Install all dependencies
   • Build TypeScript files
   • Start the development server
   • Enable hot reloading

🚀 Starting development server...
🔧 Installing system dependencies...
✅ System dependencies installed
📦 Installing Node.js dependencies...
✅ Production dependencies installed
🔧 Installing development dependencies...
✅ Development dependencies installed
🏗️ Building backend TypeScript...
✅ Backend built successfully
🏗️ Building frontend TypeScript...
✅ Frontend built successfully

🎉 Development environment is ready!
🌐 Open your browser and go to: http://localhost:3000
📝 Your code changes will automatically reload!
```

## 🔧 How It Works

### Development Mode (`local/`)
- **Hot Reloading**: Your code changes automatically reload
- **Volume Mounting**: Source code is mounted from your local machine
- **Port Mapping**: Access at `http://localhost:3000`
- **Progress Indicators**: Clear feedback during build process
- **No Build Step**: Just edit and save - changes appear instantly

### Production Mode (`prod/`)
- **Optimized Build**: Multi-stage Docker build for smaller images
- **Static Files**: Pre-built and optimized
- **Health Checks**: Container health monitoring
- **Background Running**: Runs in detached mode
- **Status Verification**: Confirms server is running

## 🛠️ Standard Docker Commands

### From Root Directory
```bash
# Development
docker compose --profile dev up --build
docker compose --profile dev logs -f
docker compose --profile dev down

# Production
docker compose --profile prod up --build -d
docker compose --profile prod logs -f
docker compose --profile prod down
```

### From Local Folder
```bash
cd local
docker compose up --build
docker compose logs -f
docker compose down
```

### From Prod Folder
```bash
cd prod
docker compose up --build -d
docker compose logs -f
docker compose down
```

### General Commands
```bash
# Build images
docker build --target development -t cars-game:dev .
docker build --target production -t cars-game:prod .

# Run containers directly
docker run -p 3000:3000 cars-game:dev
docker run -p 3000:3000 cars-game:prod

# View running containers
docker ps

# Clean up
docker system prune -f
```

## 🌍 Portability Benefits

✅ **No Local Dependencies**: No need to install Node.js, npm, or TypeScript  
✅ **Works Everywhere**: Same commands on Windows, Mac, Linux  
✅ **Standard Docker**: Uses only `docker compose` and `docker build`  
✅ **Hot Reloading**: Your code changes automatically reload  
✅ **Clear Feedback**: Progress indicators and status messages  
✅ **Clean Isolation**: No conflicts with other projects  
✅ **Organized Structure**: Separate local and production environments  
✅ **Easy Sharing**: Just share the code - Docker handles the rest  

## 🔄 Migration from build.ps1

The old `build.ps1` workflow:
```powershell
npm install
npm run build:backend
npm run build:frontend
npm start
```

New Docker workflow:
```bash
# Local development
cd local
./start-dev.sh

# Production
cd prod
./start-prod.sh
```

## 🐛 Troubleshooting

### Docker not running
```bash
# Check Docker status
docker info
```

### Port already in use
```bash
# Stop existing containers
docker compose down

# Or change port in docker-compose.yml
```

### Build issues
```bash
# Clean everything and rebuild
docker system prune -f
docker compose --profile dev up --build
```

### View logs
```bash
# Development logs
docker compose --profile dev logs -f

# Production logs
docker compose --profile prod logs -f
```

## 📝 Development Workflow

1. **Start Development**: `cd local && ./start-dev.sh` or `start-dev.bat`
2. **Edit Code**: Make changes in `src/` or `public/`
3. **See Changes**: Automatically reloaded in browser
4. **Stop**: `Ctrl+C` or `docker compose down`
5. **Deploy**: `cd prod && ./start-prod.sh` or `start-prod.bat`

## 🎯 Platform Agnostic Commands

### Windows (PowerShell/CMD)
```cmd
# Local development
cd local
start-dev.bat

# Production
cd prod
start-prod.bat
```

### macOS/Linux (Terminal)
```bash
# Local development
cd local
./start-dev.sh

# Production
cd prod
./start-prod.sh
```

### Any Platform (Docker Only)
```bash
# These work everywhere
docker compose --profile dev up --build
docker compose --profile prod up --build -d
docker compose down
docker system prune -f
```

## 🎯 Next Steps

- The setup is ready to use immediately
- Consider adding database services to `docker-compose.yml` if needed
- Add environment variables for configuration
- Set up CI/CD pipelines using the same Docker setup

---

**Happy Racing! 🏁** 