const connection = require('../db/connection');

//Create Order 
const createOrder = (dataNewOrder, callBack) => {
  const sqlQuery = 'INSERT INTO orders SET ?';
  connection.query(sqlQuery, dataNewOrder, callBack);
}
//Get all orders
const getAllOrders = (callBack) => {
  const sqlQuery = `
              SELECT o.id AS orderId, o.totalAmount, o.dateOrder, o.deliveryAddress, o.status, o.trackingNumber,
                    sm.title AS shippingMethod, sm.cost AS shippingCost, sm.delivery_time AS shippingDeliveryTime,
                    i.id AS itemId, i.title AS itemTitle, i.price AS itemPrice, i.urlImage AS itemImageUrl,
                    oi.quantity
              FROM orders o
              INNER JOIN Shipping_methods sm ON o.shippingMethodId = sm.id
              INNER JOIN order_items oi ON o.id = oi.orderId
            `;
  connection.query(sqlQuery, callBack);
}

//Get order by id
const getOrderById = (id, callBack) => {
  const sqlQuery = `
              SELECT o.id AS orderId, o.totalAmount, o.dateOrder, o.deliveryAddress, o.status, o.trackingNumber,
                    sm.title AS shippingMethod, sm.cost AS shippingCost, sm.delivery_time AS shippingDeliveryTime,
                    i.id AS itemId, i.title AS itemTitle, i.price AS itemPrice, i.urlImage AS itemImageUrl,
                    oi.quantity
              FROM orders o
              INNER JOIN Shipping_methods sm ON o.shippingMethodId = sm.id
              INNER JOIN order_items oi ON o.id = oi.orderId
              WHERE o.id = ?
            `;
  connection.query(sqlQuery, id, callBack);
}

//Get all orders by id customer
const getAllOrdersByIdCustomer = (id, callBack) => {
  const sqlQuery = `
              SELECT o.id AS orderId, o.totalAmount, o.dateOrder, o.deliveryAddress, o.status, o.trackingNumber,
                    sm.title AS shippingMethod, sm.cost AS shippingCost, sm.delivery_time AS shippingDeliveryTime,
                    i.id AS itemId, i.title AS itemTitle, i.price AS itemPrice, i.urlImage AS itemImageUrl,
                    oi.quantity
              FROM orders o
              INNER JOIN Shipping_methods sm ON o.shippingMethodId = sm.id
              INNER JOIN order_items oi ON o.id = oi.orderId
              WHERE o.userId = ?
            `;
  connection.query(sqlQuery, id, callBack);
}

//update order status and tracking number
const updateOrderStatusAndTrackingNumber = (id, newDataOrder, callBack) => {
  const sqlQuery = 'UPDATE order SET ? WHERE id = ?'
connection.query(sqlQuery, [newDataOrder, id], callBack);
}


module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getAllOrdersByIdCustomer,
  updateOrderStatusAndTrackingNumber
}
