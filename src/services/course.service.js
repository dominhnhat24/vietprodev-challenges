const db = require('../models');

const getAllCourses = async () => {
    return await db.courses.findAll();
};

module.exports = {
    getAllCourses
};