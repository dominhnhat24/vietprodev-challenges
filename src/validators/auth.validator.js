const {body} = require('express-validator');


const validateRegister = [
    body('email')
        .exists({ checkFalsy: true })
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),

    body('name')
        .exists({ checkFalsy: true })
        .withMessage('Name is required')
        .bail()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters long')
        .trim(),

    body('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .bail()
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must contain at least one number')
        .matches(/[^A-Za-z0-9]/)
        .withMessage('Password must contain at least one special character')
];

module.exports = {
    validateRegister
};