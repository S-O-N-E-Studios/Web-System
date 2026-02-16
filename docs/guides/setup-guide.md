# Development Setup Guide

## Prerequisites

1. Install Node.js 18 or higher
2. Install MongoDB 6 or higher
3. Install Git

## Step-by-Step Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd project-management-app
```

### 2. Install Dependencies
```bash
npm run install:all
```

### 3. Configure Environment Variables

**Backend (.env):**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/project_management_dev
JWT_SECRET=your_jwt_secret_here
GOOGLE_MAPS_API_KEY=your_google_maps_key
```

**Frontend (.env):**
```env
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

### 4. Start MongoDB
```bash
mongod
```

### 5. Run Development Servers
```bash
npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Health: http://localhost:5000/health

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod --version`
- Check connection string in .env
- Verify port 27017 is not in use

### Port Already in Use
- Backend: Change PORT in backend/.env
- Frontend: Set PORT=3001 in frontend/.env

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules backend/node_modules frontend/node_modules
npm run install:all
```
