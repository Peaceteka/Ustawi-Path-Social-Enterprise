# Ustawi Path Social Enterprise

A modern web application for managing social enterprise operations, savings, and loan services.

## Features

- Member registration and management
- Savings and loan transactions
- Financial reporting
- User access control
- Secure authentication

## Tech Stack

- Frontend: React
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```

2. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   PORT=5000
   DATABASE_URL=postgresql://username:password@localhost:5432/ustawi_db
   JWT_SECRET=your_jwt_secret
   ```

3. Run the application:
   - Development mode:
     ```bash
     npm run dev:full
     ```
   - Backend only:
     ```bash
     npm run dev
     ```
   - Frontend only:
     ```bash
     npm run client
     ```

## Project Structure

```
ustawi-path/
├── client/               # React frontend
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── .env                 # Environment variables
└── package.json         # Project dependencies
```
