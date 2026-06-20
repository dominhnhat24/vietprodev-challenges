const { body } = require('express-validator');

const allowedCourseFields = ['course_name', 'description'];

// Create requires course_name because the database column is NOT NULL.
const validateCreateCourse = [
    body('course_name')
        .exists({ checkFalsy: true })
        .withMessage('course_name is required')
        .bail()
        .isLength({ min: 2, max: 255 })
        .withMessage('course_name must be between 2 and 255 characters'),
        
    body('description')
        .optional({ nullable: true })
        .isString()
        .withMessage('description must be a string')
];

// Update accepts partial data, but at least one editable field must be provided.
const validateUpdateCourse = [
    body()
        .custom((value) => allowedCourseFields.some((field) => Object.prototype.hasOwnProperty.call(value, field)))
        .withMessage('At least one course field must be provided'),

    body('course_name')
        .optional()
        .isLength({ min: 2, max: 255 })
        .withMessage('course_name must be between 2 and 255 characters'),

    body('description')
        .optional({ nullable: true })
        .isString()
        .withMessage('description must be a string')
];

module.exports = {
    validateCreateCourse,
    validateUpdateCourse
};
