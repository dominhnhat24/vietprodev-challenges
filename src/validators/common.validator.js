const { param } = require('express-validator');

// Reusable id validator for routes like /api/courses/:id and /api/classes/:id.
const validateIdParam = [
    param('id')
        .isInt({ min: 1 })
        .withMessage('id must be a positive integer')
        .toInt()
];

module.exports = {
    validateIdParam
};
