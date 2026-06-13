const classService = require('../services/class.service');

const getAllClasses = async(req, res) => {
    try{
        const classes = await classService.getAllClasses();
        res.status(200).json({
            status: 'success',
            data: classes,
            message: 'Classes retrieved successfully'
        });
    }

    catch(error){
        res.status(500).json({ 
            status: 'error',
            message: error.message, 
        });
    }

};

module.exports ={
    getAllClasses
};

