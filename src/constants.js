// Application constants
export const DB_NAME = "projectdb";
export const PORT = process.env.PORT || 8000;
export const API_VERSION = "v1";

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// Validation patterns
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
};

// Token settings
export const TOKEN = {
  ACCESS_EXPIRY: "1d",
  REFRESH_EXPIRY: "10d",
  COOKIE_OPTIONS: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};