const orderItem = require('../models/orderItem');

const createOrderItem = (req, res) => {
  const {urlImage, title, price, quantity, orderId} = req.body;

  if (!urlImage || !title || !price || !quantity || !orderId) {
    return res.status(500).send(`All data is required`);
  }

  const dataNewOrderItem = {
    urlImage,
    title,
    price,
    quantity,
    orderId
  }
  orderItem.createOrderItem(dataNewOrderItem, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to create order item: ${error}`);
    }
      return res.status(200).send(results);
  });
}