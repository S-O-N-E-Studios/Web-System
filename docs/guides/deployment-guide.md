# Deployment Guide

## Prerequisites

- Node.js 18+ installed on server
- MongoDB instance (local or Atlas)
- Environment variables configured

## Production Build

### Frontend
```bash
cd frontend
npm run build
```

The build artifacts will be in `frontend/build/`.

### Backend
```bash
cd backend
npm start
```

## Deployment Options

### Option 1: Traditional Server (VPS/VM)

1. SSH into your server
2. Clone the repository
3. Install dependencies: `npm run install:all`
4. Build frontend: `npm run build:frontend`
5. Set environment variables
6. Start backend with PM2:
   ```bash
   npm install -g pm2
   cd backend
   pm2 start src/server.js --name "pm-api"
   ```
7. Serve frontend with Nginx

### Option 2: Docker

Create a `docker-compose.yml` for multi-container deployment.

### Option 3: Cloud Platforms

- **Azure App Service:** Deploy backend and frontend separately
- **AWS:** Use Elastic Beanstalk or ECS
- **Heroku:** Use buildpacks for Node.js
- **Railway:** Connect GitHub for automatic deployments

## Environment Variables

Ensure all production environment variables are set:
- `NODE_ENV=production`
- `MONGODB_URI=<production-mongodb-uri>`
- `JWT_SECRET=<strong-random-secret>`
- `ALLOWED_ORIGINS=<your-frontend-domain>`

## SSL/TLS

Always use HTTPS in production. Configure SSL certificates through:
- Let's Encrypt (free)
- Cloud provider's certificate manager
- Cloudflare (reverse proxy)
