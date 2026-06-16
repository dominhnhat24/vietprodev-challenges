const express = require('express');
const classController = require('../controllers/class.controller');
const validateRequest = require('../middlewares/validate-request');
const { validateIdParam } = require('../validators/common.validator');
const { validateCreateClass, validateUpdateClass } = require('../validators/class.validator');

const router = express.Router();

// Routes define API URLs and attach validators before the controller runs.
router.get('/', classController.getAllClasses);
router.get('/:id', validateIdParam, validateRequest, classController.getClassById);
router.post('/', validateCreateClass, validateRequest, classController.createClass);
router.put('/:id', validateIdParam, validateUpdateClass, validateRequest, classController.updateClass);
router.delete('/:id', validateIdParam, validateRequest, classController.deleteClass);

module.exports = router;
