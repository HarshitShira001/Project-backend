# Project Backend

A production-grade RESTful backend API built with Node.js, Express, and MongoDB.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT (Access + Refresh tokens)
- **File Upload**: Cloudinary + Multer
- **Dev Tools**: Nodemon, Prettier, dotenv

## Project Structure
```
src/
  app.js         - Express app configuration
  index.js       - Server entry point + DB connection
  constants.js   - App-wide constants
public/
  temp/          - Temporary file uploads
```

## Getting Started
```bash
# 1. Clone the repo
git clone https://github.com/HarshitShira001/Project-backend.git
cd Project-backend

# 2. Install dependencies
npm install

# 3. Configure environment
cp .envsample .env
# Edit .env with your values

# 4. Start development server
npm run dev
```

## API Base URL
`http://localhost:8000/api/v1`