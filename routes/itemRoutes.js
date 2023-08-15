const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);
router.get('/items/Category/:id', itemController.getAllItemsByCategory);
router.post('/items', authController.validateToken, itemController.createItem);
router.put('/items/:id', authController.validateToken, itemController.updateItem);
router.delete('/items/:id', authController.validateToken, itemController.deleteItem);


module.exports = router;