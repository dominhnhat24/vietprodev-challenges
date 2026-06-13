const db = require('../models');

const getAllClass = async () => {

    return await db.classes.findAll();
};

module.exports = {
    getAllClass
};
