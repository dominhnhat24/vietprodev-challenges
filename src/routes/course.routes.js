const express = require('express');
const courseController = require('../controllers/course.controller');

const { validateIdParam } = require('../validators/common.validator');
const { validateCreateCourse, validateUpdateCourse } = require('../validators/course.validator');
const validateRequest = require('../middlewares/validate-request');

const router = express.Router();

// Routes define API URLs and attach validators before the controller runs.
router.get('/', courseController.getAllCourses);
router.get('/:id', validateIdParam, validateRequest, courseController.getCourseById);
router.post('/', validateCreateCourse, validateRequest, courseController.createCourse);
router.put('/:id', validateIdParam, validateUpdateCourse, validateRequest, courseController.updateCourse);
router.delete('/:id', validateIdParam, validateRequest, courseController.deleteCourse);

module.exports = router;

// đã hiểu được các validator 
//done chall2 