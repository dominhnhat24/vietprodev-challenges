const db = require('../../models');
const ApiError = require('../utils/api-error');

// Service contains business logic and database operations.
// Controllers call these functions instead of using Sequelize directly.
const getAllCourses = async () => {
    return await db.courses.findAll({
        order: [['course_id', 'ASC']]
    });
};

const getCourseById = async (courseId) => {
    const course = await db.courses.findByPk(courseId);

    if (!course) {
        throw new ApiError(404, 'Course not found');
    }

    return course;
};

const createCourse = async (courseData) => {
    return await db.courses.create({
        course_name: courseData.course_name,
        description: courseData.description || null
    });
};

const updateCourse = async (courseId, courseData) => {
    const course = await getCourseById(courseId);
    const updateData = {};

    // Only update fields that belong to the courses table.
    if (Object.prototype.hasOwnProperty.call(courseData, 'course_name')) {
        updateData.course_name = courseData.course_name;
    }

    if (Object.prototype.hasOwnProperty.call(courseData, 'description')) {
        updateData.description = courseData.description;
    }

    await course.update(updateData);

    return course;
};

const deleteCourse = async (courseId) => {
    const course = await getCourseById(courseId);

    // A course with classes should not be deleted because classes still reference it.
    const classCount = await db.classes.count({
        where: { course_id: courseId }
    });

    if (classCount > 0) {
        throw new ApiError(409, 'Cannot delete course because it still has classes');
    }

    await course.destroy();
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
