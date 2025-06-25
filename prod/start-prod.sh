#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚗 Cars Racing Game - Production Environment${NC}"
echo -e "${CYAN}=============================================${NC}"
echo ""

# Check if Docker is running
echo -e "${YELLOW}🔍 Checking Docker status...${NC}"
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running! Please start Docker first.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker is running!${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ docker-compose.yml not found! Please run this from the prod/ directory.${NC}"
    exit 1
fi

# Check if parent directory has the source code
if [ ! -f "../package.json" ]; then
    echo -e "${RED}❌ package.json not found in parent directory! Please run this from the prod/ directory.${NC}"
    exit 1
fi

echo -e "${YELLOW}🏗️ Building and starting production environment...${NC}"
echo -e "${CYAN}📝 This will:${NC}"
echo -e "   • Build optimized production image"
echo -e "   • Start production server in background"
echo -e "   • Enable health checks"
echo -e "   • Run with production optimizations"
echo ""

# Start the production environment
echo -e "${GREEN}🚀 Starting production server...${NC}"
docker compose up --build -d

# Wait a moment for the container to start
echo -e "${YELLOW}⏳ Waiting for server to start...${NC}"
sleep 3

# Check if the container is running
if docker compose ps | grep -q "Up"; then
    echo -e "${GREEN}✅ Production server is running!${NC}"
    echo ""
    echo -e "${GREEN}🎉 Production environment is ready!${NC}"
    echo -e "${CYAN}🌐 Open your browser and go to: http://localhost:3000${NC}"
    echo ""
    echo -e "${YELLOW}📊 Useful commands:${NC}"
    echo -e "   • View logs: docker compose logs -f"
    echo -e "   • Stop server: docker compose down"
    echo -e "   • Check status: docker compose ps"
else
    echo -e "${RED}❌ Failed to start production server${NC}"
    echo -e "${YELLOW}📊 Check logs: docker compose logs${NC}"
    exit 1
fi 