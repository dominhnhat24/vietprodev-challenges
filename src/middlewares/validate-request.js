const { validationResult } = require('express-validator');

// Converts express-validator errors into the challenge response format.
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const violations = errors.array().map((error) => ({
        field: error.path || error.param || 'unknown',
        message: error.msg
    }));

    return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        violations
    });
};

module.exports = validateRequest;
