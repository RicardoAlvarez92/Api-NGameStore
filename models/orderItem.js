const connection = require('../db/connection');

//Create order item
const createOrderItem = (dataNewOrderItem, callBack) => {
  const sqlQuery = 'INSERT INTO order_items SET ?';
  connection.query(sqlQuery, dataNewOrderItem, callBack);
}

