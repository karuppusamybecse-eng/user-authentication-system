# Complete User Authentication System

A full-stack User Authentication System built with React (Vite) and Node.js/Express. It includes user registration, login, JWT-based authentication, and protected routes.

## Features
- **Frontend**: React (Vite), React Router, Context API for state management, pure CSS for styling, responsive design.
- **Backend**: Node.js, Express, MongoDB (Mongoose), JSON Web Tokens (JWT), bcryptjs for password hashing.
- **Security**: Password hashing, secure JWT storage (localStorage for demo), protected dashboard route.

## Prerequisites
- Node.js installed
- MongoDB installed and running locally on port `27017` (or you can use MongoDB Atlas by modifying `MONGO_URI` in `backend/.env`)

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` directory.
   ```bash
   cd backend
   ```
2. Install backend dependencies.
   ```bash
   npm install
   ```
3. Ensure MongoDB is running locally (`mongodb://127.0.0.1:27017`).
4. Start the backend server.
   ```bash
   npm run dev
   ```
   *The server will start on port 5000.*

### 2. Frontend Setup
1. Open a new terminal window and navigate to the `frontend` directory.
   ```bash
   cd frontend
   ```
2. Install frontend dependencies.
   ```bash
   npm install
   ```
3. Start the Vite development server.
   ```bash
   npm run dev
   ```
   *The application will open in your default browser at `http://localhost:5173`.*

## Example API Responses

### POST `/api/auth/register`
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Success Response (201 Created):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d0fe4f5311236168a109ca",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST `/api/auth/login`
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**Success Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d0fe4f5311236168a109ca",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET `/api/auth/dashboard`
**Headers:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
**Success Response (200 OK):**
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2023-06-21T14:48:00.000Z",
  "__v": 0
}
```
