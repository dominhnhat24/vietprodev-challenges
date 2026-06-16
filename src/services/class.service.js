const db = require('../../models');
const ApiError = require('../utils/api-error');

// Class service is responsible for class business rules and database access.
const getAllClasses = async () => {
    return await db.classes.findAll({
        order: [['class_id', 'ASC']]
    });
};

const getClassById = async (classId) => {
    const classItem = await db.classes.findByPk(classId);

    if (!classItem) {
        throw new ApiError(404, 'Class not found');
    }

    return classItem;
};

const ensureCourseExists = async (courseId) => {
    const course = await db.courses.findByPk(courseId);

    if (!course) {
        throw new ApiError(404, 'Course not found');
    }
};

const createClass = async (classData) => {
    await ensureCourseExists(classData.course_id);

    return await db.classes.create({
        course_id: classData.course_id,
        class_name: classData.class_name
    });
};

const updateClass = async (classId, classData) => {
    const classItem = await getClassById(classId);
    const updateData = {};

    if (Object.prototype.hasOwnProperty.call(classData, 'course_id')) {
        await ensureCourseExists(classData.course_id);
        updateData.course_id = classData.course_id;
    }

    if (Object.prototype.hasOwnProperty.call(classData, 'class_name')) {
        updateData.class_name = classData.class_name;
    }

    await classItem.update(updateData);

    return classItem;
};

const deleteClass = async (classId) => {
    const classItem = await getClassById(classId);

    // A class with enrollments should not be deleted because enrollments still reference it.
    const enrollmentCount = await db.enrollments.count({
        where: { class_id: classId }
    });

    if (enrollmentCount > 0) {
        throw new ApiError(409, 'Cannot delete class because it still has enrollments');
    }

    await classItem.destroy();
};

module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
};
