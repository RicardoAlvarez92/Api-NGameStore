const order = require('../models/order');

//Create order
const createOrder = (req, res) => {
  const {totalAmount, deliveryAddress, shippingMethodId, userId} = req.body;

  if(!totalAmount || !deliveryAddress || !shippingMethodId || !userId) {
    return res.status(500).send('All fields are required');
  }

  const dataNewOrder = {
    totalAmount,
    deliveryAddress,
    shippingMethodId,
    userId
  }

  order.createOrder(dataNewOrder, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to create order: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Get all order
const getAllOrder = (req, res) => {
  order.getAllOrders((error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fetch all orders: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Get order by id
const getOrderById = (req, res) => {
  const {id} = req.params;
  order.getOrderById(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles to trying to fetch order by id: ${error}`);
    }
    if (!results.length) {
      return res.status(204).send('No content');
    }
      return res.status(200).send(results);
  })
}
//Get all orders by id customer
const getAllOrdersByIdCustomer = (req, res) => {
  const {id} = req.params;
  order.getAllOrdersByIdCustomer(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fetch orders by id customer: ${error}`);
    }
    if (!results.length) {
      return res.status(204).send('No content')
    }
      return res.status(200).send(results);
  });
}

//Update order status and tracking number
const updateOrderStatusAndTrackingNumber = (req, res) => {
  const {id} = req.params;
  const {status, trackingNumber} = req.body;

  if (!status || !trackingNumber) {
    return res.status(500).send('All fields are required');
  }

  const newDataOrder = {
    status,
    trackingNumber
  }

  order.updateOrderStatusAndTrackingNumber(id, newDataOrder, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles to trying to update status order: ${error}`);
    }

      return res.status(200).send(results);
  })
}

module.exports = {
  createOrder,
  getAllOrder,
  getAllOrdersByIdCustomer,
  getOrderById,
  updateOrderStatusAndTrackingNumber
}