const connection = require('../db/connection');

//Create Item
const createItem = (dataNewItem, callBack) => {
  const sqlQuery = 'INSERT INTO items SET ?';
  connection.query(sqlQuery, dataNewItem ,callBack);
}
//Get all items
const getAllItems = (callBack) => {
  const sqlQuery = 'SELECT * FROM items';
  connection.query(sqlQuery, callBack);
}
//Get all items by category 
const getAllItemsByCategory = (idItemCategory, callBack) => {
  const sqlQuery = 'SELECT * FROM items WHERE itemCategory = ?'
  connection.query(sqlQuery, idItemCategory, callBack);
}
//Get items by id
const getItemById = (id, callBack) => {
  const sqlQuery = 'SELECT * FROM items WHERE id = ?';
  connection.query(sqlQuery, id, callBack);
}
//Update Item
const updateItem = (id, newDataItem, callBack) => {
  const sqlQuery = 'UPDATE items SET ? WHERE id = ?';
  connection.query(sqlQuery, [newDataItem, id], callBack);
}
//Delete items
const deleteItem = (id, callBack) => {
  const sqlQuery = 'DELETE FROM items WHERE id = ?';
  connection.query(sqlQuery, id, callBack);
}

module.exports = {
  createItem,
  getAllItems,
  getAllItemsByCategory,
  getItemById,
  updateItem,
  deleteItem
}





