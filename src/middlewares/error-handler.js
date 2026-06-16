const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize');

const toViolation = (error) => ({
    field: error.path || error.param || 'unknown',
    message: error.message
});

// Global error handler keeps every API error response in the same JSON format.
const errorHandler = (error, req, res, next) => {
    console.error(`[ERROR] ${req.method} ${req.originalUrl}`, error);

    if (error.name === 'ApiError') {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
            violations: error.violations
        });
    }

    if (error instanceof UniqueConstraintError || error instanceof ValidationError) {
        return res.status(400).json({
            status: 'error',
            message: 'Database validation failed',
            violations: error.errors.map(toViolation)
        });
    }

    if (error instanceof ForeignKeyConstraintError) {
        return res.status(409).json({
            status: 'error',
            message: 'Database relationship conflict',
            violations: [
                {
                    field: error.fields ? Object.keys(error.fields).join(', ') : 'foreign_key',
                    message: error.message
                }
            ]
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        violations: []
    });
};

module.exports = errorHandler;
