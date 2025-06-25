# Multi-stage Dockerfile for Cars Racing Game
FROM node:18-alpine AS base

# Install curl for health checks
RUN echo "🔧 Installing system dependencies..." && \
    apk add --no-cache curl && \
    echo "✅ System dependencies installed"

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN echo "📦 Installing Node.js dependencies..." && \
    npm ci --only=production && \
    npm cache clean --force && \
    echo "✅ Production dependencies installed"

# Development stage
FROM base AS development

# Install dev dependencies
RUN echo "🔧 Installing development dependencies..." && \
    npm ci && \
    echo "✅ Development dependencies installed"

# Copy source code
COPY . .

# Build both backend and frontend
RUN echo "🏗️ Building backend TypeScript..." && \
    npm run build:backend && \
    echo "✅ Backend built successfully" && \
    echo "🏗️ Building frontend TypeScript..." && \
    npm run build:frontend && \
    echo "✅ Frontend built successfully"

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "start"]

# Production stage
FROM base AS production

# Copy built files from development stage
COPY --from=development /app/dist ./dist
COPY --from=development /app/public ./public

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "start"] 