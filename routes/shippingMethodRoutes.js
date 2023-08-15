const express = require('express');
const router = express.Router();
const shippingMethodController = require('../controllers/shippingMethodController');
const authController = require('../controllers/authController');


router.post('/shippingmethods', authController.validateToken, shippingMethodController.createShippingMethod);
router.get('/shippingmethods', shippingMethodController.getAllShippingMethod);
router.get('/shippingmethods/:id', shippingMethodController.getShippingMethodById);
router.put('/shippingmethods/:id',authController.validateToken, shippingMethodController.updateShippingMethod);
router.delete('/shippingmethods/:id', authController.validateToken, shippingMethodController.deleteShippingMethod);

module.exports = router;

