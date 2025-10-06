# SkillVerse Application Architecture

## Overview

SkillVerse is a skill-sharing platform with a React frontend and a Node.js/Express backend. The backend uses PostgreSQL for structured user data and MongoDB for unstructured skill data. The application is containerized using Docker and orchestrated with Kubernetes for scalable deployment.

## Components

### Frontend

- Built with React and Vite.
- Serves the user interface.
- Communicates with the backend API for data.

### Backend

- Node.js with Express framework.
- Provides REST API endpoints for users and skills.
- Connects to PostgreSQL for user management.
- Connects to MongoDB for skill data storage.

### Databases

- **PostgreSQL**: Stores structured data such as user accounts and roles.
- **MongoDB**: Stores unstructured data such as skill details, ratings, and reviews.

## Containerization

- Separate Docker images for frontend and backend.
- Docker Compose file for local development with all services.
- Kubernetes manifests for production deployment with:
  - Deployments and Services for frontend, backend, PostgreSQL, and MongoDB.
  - PersistentVolumeClaims for database storage.

## Networking

- Frontend exposed via LoadBalancer service.
- Backend exposed internally via ClusterIP service.
- Databases accessible only within the cluster.

## Environment Variables

- Backend uses environment variables for database connection strings.
- Example `.env.example` provided for local development.

## Development Workflow

- Use Docker Compose for local multi-container setup.
- Use Kubernetes manifests for cloud or cluster deployment.

## Notes

- Backend replaces local storage with database operations.
- The architecture supports scalability and portability.
- Persistent storage ensures data durability.

---

This architecture ensures a clean separation of concerns, scalability, and ease of deployment using container orchestration.
