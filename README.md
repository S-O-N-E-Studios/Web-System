# Project Management Web Application

MERN Stack application for managing projects, tasks, and teams with Agile methodologies.

## Tech Stack

- **Frontend:** React, Redux Toolkit, Material-UI
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** JWT
- **File Storage:** AWS S3 (or Azure Blob)
- **Maps:** Google Maps API

## Prerequisites

- Node.js 18+ 
- MongoDB 6+
- npm or yarn
- Git

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd project-management-app
   ```

2. **Install dependencies:**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables:**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Edit backend/.env with your values

   # Frontend
   cp frontend/.env.example frontend/.env
   # Edit frontend/.env with your values
   ```

4. **Start MongoDB:**
   ```bash
   mongod
   ```

5. **Run development servers:**
   ```bash
   npm run dev
   ```

   This starts:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

## Project Structure

```
project-management-app/
├── backend/          # Express API
├── frontend/         # React application
├── docs/             # Documentation
└── scripts/          # Utility scripts
```

## Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run test` - Run all tests
- `npm run lint` - Lint all code

### Backend
- `npm run dev` - Start backend with nodemon
- `npm test` - Run backend tests
- `npm run lint` - Lint backend code

### Frontend
- `npm start` - Start React development server
- `npm test` - Run frontend tests
- `npm run build` - Build for production

## Development Workflow

1. Create feature branch from `develop`
2. Make changes and commit (use conventional commits)
3. Write tests for new features
4. Create pull request to `develop`
5. Wait for CI checks and peer review
6. Merge after approval

## Documentation

- [Setup Guide](docs/guides/setup-guide.md)
- [API Documentation](docs/api/api-documentation.md)
- [Architecture](docs/architecture/system-design.md)

## Team

- Fortune Mabona - Project Lead

## License

MIT
