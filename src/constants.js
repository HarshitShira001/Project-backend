// Application constants
export const DB_NAME = "projectdb";
export const PORT = process.env.PORT || 8000;
export const API_VERSION = "v1";

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};