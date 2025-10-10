# Project Backend

A production-grade RESTful backend API built with Node.js, Express, and MongoDB.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT (Access + Refresh tokens) + Bcrypt
- **File Upload**: Cloudinary + Multer
- **Dev Tools**: Nodemon, Prettier, dotenv

## Features
- âœ… User registration and login
- âœ… JWT-based access and refresh token auth
- âœ… File upload with Cloudinary
- âœ… MongoDB with Mongoose ODM
- âœ… Global error handling
- âœ… CORS and cookie support

## Project Structure
```
src/
  app.js         - Express app configuration
  index.js       - Server entry point + DB connection
  constants.js   - App-wide constants and HTTP codes
public/
  temp/          - Temporary file uploads
```

## Environment Variables
See `.envsample` for required environment variables.

## Getting Started
```bash
npm install
cp .envsample .env
npm run dev
```

## API Endpoints
| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | /health               | Health check        |
| POST   | /api/v1/users/register| Register user       |
| POST   | /api/v1/users/login   | Login user          |
| POST   | /api/v1/users/logout  | Logout user         |

## License
ISC