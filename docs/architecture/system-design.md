# System Architecture

## Overview

The Project Management Application follows a MERN (MongoDB, Express, React, Node.js) stack architecture with a monorepo structure.

## Architecture Diagram

```
                    ┌─────────────┐
                    │   Client    │
                    │  (Browser)  │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   React     │
                    │  Frontend   │
                    │  (Port 3000)│
                    └──────┬──────┘
                           │ HTTP/REST
                    ┌──────┴──────┐
                    │   Express   │
                    │   Backend   │
                    │  (Port 5000)│
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
       ┌──────┴───┐  ┌────┴────┐  ┌───┴──────┐
       │  MongoDB  │  │  AWS S3  │  │  Google  │
       │ Database  │  │  Storage │  │   Maps   │
       └──────────┘  └─────────┘  └──────────┘
```

## Frontend Architecture

- **Component-Based:** Modular React components
- **State Management:** Redux Toolkit for global state
- **Routing:** React Router v6 with protected routes
- **API Layer:** Axios with interceptors for auth

## Backend Architecture

- **RESTful API:** Express.js with versioned endpoints
- **Authentication:** JWT-based with middleware protection
- **Database:** MongoDB with Mongoose ODM
- **Middleware Stack:** Helmet, CORS, Rate Limiting, Compression

## Security

- JWT authentication
- Password hashing (bcryptjs)
- Rate limiting
- CORS configuration
- Helmet security headers
- Input validation (Joi)

## Data Flow

1. User interacts with React UI
2. Action dispatched to Redux store
3. Async thunk calls API service
4. Axios sends HTTP request to backend
5. Express routes to appropriate controller
6. Controller processes business logic
7. Mongoose interacts with MongoDB
8. Response flows back through the chain
