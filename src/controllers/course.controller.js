const courseService = require('../services/course.service');

const getAllCourses = async (req, res) => {

    try {

        const courses = await courseService.getAllCourses();

        res.status(200).json({
            status: 'success',
            data: courses,
            message: 'get courses successfully'
        });

    } catch (error) {

        res.status(500).json({
            status: 'error',
            message: error.message
        });

    }

};

module.exports = {
    getAllCourses
};