/**
 * Application constants
 * Centralizes all magic numbers and strings
 */

module.exports = {
    // HTTP Status Codes
    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500
    },

    // JWT Configuration
    JWT: {
        EXPIRES_IN: '24h',
        ALGORITHM: 'HS256'
    },

    // File Upload Configuration
    UPLOAD: {
        MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
        ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/jpg'],
        UPLOAD_PATH: 'upload/'
    },

    // Database Configuration
    DB: {
        CONNECTION_TIMEOUT: 10000,
        RETRY_ATTEMPTS: 3
    },

    // Error Messages
    ERRORS: {
        REQUIRED_FIELDS: 'All fields are required',
        INVALID_CREDENTIALS: 'Invalid credentials',
        USER_NOT_FOUND: 'User not found',
        EMAIL_EXISTS: 'Email already in use',
        INVALID_AMOUNT: 'Amount must be greater than 0',
        INVALID_DATE: 'Invalid date format',
        SERVER_ERROR: 'Internal server error',
        UNAUTHORIZED: 'Not authorized',
        TOKEN_FAILED: 'Not authorized, token failed',
        NO_TOKEN: 'Not authorized, no token'
    },

    // Success Messages
    SUCCESS: {
        USER_CREATED: 'User created successfully',
        LOGIN_SUCCESS: 'Login successful',
        INCOME_ADDED: 'Income added successfully',
        EXPENSE_ADDED: 'Expense added successfully',
        DELETED: 'Deleted successfully',
        UPDATED: 'Updated successfully'
    }
};