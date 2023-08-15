const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/register', userController.registerUser);
router.get('/users/customers',authController.validateToken, userController.getAllCustomers);
router.get('/users/admins', authController.validateToken, userController.getAllAdmins);
router.get('/users/:id',authController.validateToken, userController.getUserById);
router.put('/users/:id', authController.validateToken, userController.updateUser);
router.delete('/users/:id', authController.validateToken, userController.deleteUser);

module.exports = router;

