const connection = require('../db/connection');

//create shipping method
const createShippingMethod = (dataNewShippingMethod, callBack) => {
  const sqlQuery = 'INSERT INTO shipping_methods SET ?';
  connection.query(sqlQuery, dataNewShippingMethod, callBack);
}

//Get all shipping methods
const getAllShippingMethods = (callBack) => {
  const sqlQuery = 'SELECT * FROM shipping_methods';
  connection.query(sqlQuery, callBack);
}

//Get Shipping method by id
const getShippingMethodById = (id, callBack) => {
  const sqlQuery = 'SELECT * FROM shipping_method WHERE id = ?';
  connection.query(sqlQuery, id,callBack);
}

//Update shipping method
const updateShippingMethod = (id, newDataShippingMethod, callBack) => {
  const sqlQuery = 'UPDATE shipping_methods SET ? WHERE id = ?';
  connection.query(sqlQuery, [newDataShippingMethod, id], callBack);
}

//Delete shipping method 
const deleteShippingMethod = (id, callBack) => {
  const sqlQuery = 'DELETE FROM shipping_methods WHERE id = ?';
  connection.query(sqlQuery, id, callBack);
}

module.exports = {
  createShippingMethod,
  getAllShippingMethods,
  getShippingMethodById,
  updateShippingMethod,
  deleteShippingMethod
}