# SkillVerse Application Architecture

## Overview

SkillVerse is a skill-sharing platform built with a React frontend, Node.js/Express backend, PostgreSQL for structured user data, and MongoDB for unstructured skill data. The application is containerized using Docker and can be deployed locally with Docker Compose or on Kubernetes.

## Components

### Frontend

- **Technology**: React 18, TypeScript, Vite, Tailwind CSS
- **Purpose**: User interface for registration, login, and skill browsing
- **Features**:
  - User registration with email, password visibility toggle
  - Login with email
  - Pre-registered admin user (<admin@user.com> / VeryStrongPassword678)
- **Container**: Nginx serving static files built by Vite

### Backend

- **Technology**: Node.js 18, Express.js
- **Purpose**: API server handling user authentication and skill management
- **Features**:
  - User registration and login with bcrypt password hashing
  - JWT-based authentication (to be implemented)
  - RESTful API for users (PostgreSQL) and skills (MongoDB)
- **Container**: Node.js Alpine image

### Databases

- **PostgreSQL**: Stores structured user data (id, username, email, password, role)
- **MongoDB**: Stores unstructured skill data (title, description, category, userId)

## Containerization

### Docker Compose (Local Development)

- **frontend**: Builds React app and serves with Nginx on port 3000
- **backend**: Runs Express server on port 4000
- **postgres**: PostgreSQL 15 Alpine with persistent volume
- **mongo**: MongoDB 7 with persistent volume
- **Network**: skillverse-network for inter-service communication

### Kubernetes (Production Deployment)

- **frontend-deployment**: 2 replicas, LoadBalancer service on port 80
- **backend-deployment**: 2 replicas, ClusterIP service on port 4000
- **postgres-deployment**: 1 replica, ClusterIP service, PVC for storage
- **mongo-deployment**: 1 replica, ClusterIP service, PVC for storage

## Networking

- Frontend communicates with backend via HTTP API calls
- Backend connects to PostgreSQL via connection string
- Backend connects to MongoDB via Mongoose ODM
- Services communicate within Kubernetes cluster using DNS names

## Security

- Passwords hashed with bcrypt (10 salt rounds)
- CORS enabled for cross-origin requests
- Environment variables for database URIs and secrets

## Deployment Instructions

### Docker Compose

1. Ensure Docker and Docker Compose are installed
2. Run `docker-compose up --build`
3. Access frontend at <http://localhost:3000>
4. Backend API at <http://localhost:4000>

### Kubernetes

1. Ensure kubectl and a Kubernetes cluster are available
2. Apply manifests: `kubectl apply -f k8s/`
3. Build and push images to registry
4. Update image tags in deployments
5. Access via LoadBalancer IP

## Environment Variables

- `POSTGRES_URI`: PostgreSQL connection string
- `MONGO_URI`: MongoDB connection string
- `PORT`: Backend port (default 4000)

## Future Enhancements

- JWT authentication
- Skill CRUD operations
- User profiles
- Admin dashboard for user management
- File uploads for skill media
