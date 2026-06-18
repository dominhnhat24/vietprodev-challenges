const express = require('express');
const classController = require('../controllers/class.controller');

const validateRequest = require('../middlewares/validate-request'); 
//validateRequest dùng để định dạng và kiểm tra dữ liệu trước khi vào controller

const { validateIdParam } = require('../validators/common.validator'); 
//kiểm tra ID trong các request có hợp lệ hay không 

const { validateCreateClass, validateUpdateClass } = require('../validators/class.validator');
//validateCreateClass và validateUpdateClass dùng để kiểm tra dữ liệu khi tạo hoặc cập nhật lớp học, 
// đảm bảo rằng các trường cần thiết được cung cấp và hợp lệ.

const router = express.Router();

// Routes define API URLs and attach validators before the controller runs.
router.get('/', classController.getAllClasses);
router.get('/:id', validateIdParam, validateRequest, classController.getClassById);
router.post('/', validateCreateClass, validateRequest, classController.createClass);
router.put('/:id', validateIdParam, validateUpdateClass, validateRequest, classController.updateClass);
router.delete('/:id', validateIdParam, validateRequest, classController.deleteClass);

module.exports = router;
