const courseService = require('../services/course.service');
const asyncHandler = require('../middlewares/async-handler');
const { successResponse } = require('../utils/api-response');

// Controller receives HTTP input and returns HTTP output.
// Business rules stay in the service so this file stays easy to read.
const getAllCourses = asyncHandler(async (req, res) => {
    const courses = await courseService.getAllCourses();

    return successResponse(res, {
        message: 'Courses retrieved successfully',
        data: courses
    });
});

const getCourseById = asyncHandler(async (req, res) => {
    const course = await courseService.getCourseById(req.params.id);

    return successResponse(res, {
        message: 'Course retrieved successfully',
        data: course
    });
});

const createCourse = asyncHandler(async (req, res) => {
    const course = await courseService.createCourse(req.body);

    return successResponse(res, {
        statusCode: 201,
        message: 'Course created successfully',
        data: course
    });
});

const updateCourse = asyncHandler(async (req, res) => {
    const course = await courseService.updateCourse(req.params.id, req.body);

    return successResponse(res, {
        message: 'Course updated successfully',
        data: course
    });
});

const deleteCourse = asyncHandler(async (req, res) => {
    await courseService.deleteCourse(req.params.id);

    return successResponse(res, {
        message: 'Course deleted successfully',
        data: null
    });
});

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
