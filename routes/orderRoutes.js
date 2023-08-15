const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

router.post('/orders', orderController.createOrder);
router.get('/orders', authController.validateToken, orderController.getAllOrder);
router.get('/orders/:id', authController.validateToken, orderController.getOrderById);
router.get('/orders/customer/:id', authController.validateToken, orderController.getAllOrdersByIdCustomer);
router.put('orders/:id', authController.validateToken, orderController.updateOrderStatusAndTrackingNumber);


module.exports = router;