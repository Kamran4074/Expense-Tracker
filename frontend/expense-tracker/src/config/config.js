/**
 * Application configuration
 * Centralizes all environment-specific settings
 */

const config = {
    // API Base URL - can be overridden by environment variables
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
    
    // Request timeout in milliseconds
    REQUEST_TIMEOUT: 10000,
    
    // Application settings
    APP_NAME: "SmartExpense",
    VERSION: "1.0.0",
    
    // File upload settings
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/jpg'],
    
    // Chart settings
    CHART_COLORS: {
        primary: '#875cf5',
        secondary: '#6366f1',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
    }
};

export default config;