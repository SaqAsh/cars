#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}�� Cars Racing Game - Local Development Environment${NC}"
echo -e "${CYAN}===================================================${NC}"
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
    echo -e "${RED}❌ docker-compose.yml not found! Please run this from the local/ directory.${NC}"
    exit 1
fi

# Check if parent directory has the source code
if [ ! -f "../package.json" ]; then
    echo -e "${RED}❌ package.json not found in parent directory! Please run this from the local/ directory.${NC}"
    exit 1
fi

echo -e "${YELLOW}🏗️ Building and starting local development environment...${NC}"
echo -e "${CYAN}📝 This will:${NC}"
echo -e "   • Install all dependencies"
echo -e "   • Build TypeScript files"
echo -e "   • Start the development server"
echo -e "   • Enable hot reloading"
echo -e "   • Mount source code from parent directory"
echo ""

# Start the development environment
echo -e "${GREEN}🚀 Starting development server...${NC}"
docker compose up --build

echo ""
echo -e "${GREEN}🎉 Local development environment is ready!${NC}"
echo -e "${CYAN}🌐 Open your browser and go to: http://localhost:3000${NC}"
echo -e "${YELLOW}📝 Your code changes will automatically reload!${NC}"
echo -e "${YELLOW}🛑 Press Ctrl+C to stop the development environment${NC}" 