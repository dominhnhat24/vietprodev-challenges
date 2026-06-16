const classService = require('../services/class.service');
const asyncHandler = require('../middlewares/async-handler');
const { successResponse } = require('../utils/api-response');

// Controller functions should be thin: read params/body, call service, send response.
const getAllClasses = asyncHandler(async (req, res) => {
    const classes = await classService.getAllClasses();

    return successResponse(res, {
        message: 'Classes retrieved successfully',
        data: classes
    });
});

const getClassById = asyncHandler(async (req, res) => {
    const classItem = await classService.getClassById(req.params.id);

    return successResponse(res, {
        message: 'Class retrieved successfully',
        data: classItem
    });
});

const createClass = asyncHandler(async (req, res) => {
    const classItem = await classService.createClass(req.body);

    return successResponse(res, {
        statusCode: 201,
        message: 'Class created successfully',
        data: classItem
    });
});

const updateClass = asyncHandler(async (req, res) => {
    const classItem = await classService.updateClass(req.params.id, req.body);

    return successResponse(res, {
        message: 'Class updated successfully',
        data: classItem
    });
});

const deleteClass = asyncHandler(async (req, res) => {
    await classService.deleteClass(req.params.id);

    return successResponse(res, {
        message: 'Class deleted successfully',
        data: null
    });
});

module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
};
