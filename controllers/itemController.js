const item = require('../models/item');

//Create item
const createItem = (req, res) => {
  const {title, price, urlImage, description, urlVideo, stock, itemCategory} = req.body;

  if(!title || !price || !urlImage || !description || !urlVideo || !stock || !itemCategory){
    return res.status(400).send('All fields are required')
  }
  item.createItem(dataNewItem, (error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to create a new item: ${error}`);
    }
      return res.status(200).send(results);
  });
}
//Get all items 
const getAllItems = (req, res) => {
  item.getAllItems((error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to fecth all items: ${error}`);
    }
    if (!results.length) {
      return res.status(204).send('There are no items to display');
    }
      return res.status(200).send(results);
  });
}
//Get all items By Category
const getAllItemsByCategory = (req, res) => {
  const {id} = req.params;
  item.getAllItemsByCategory(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fecth items by category: ${error}`);
    }
    if (!results.length){
      return res.status(204).send('There are no items to display');
    }
      return res.status(200).send(results);
  });
}
//Get item by id
const getItemById = (req, res) => {
  const {id} = req.params;
  item.getItemById(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fecth item by id: ${error}`);
    }
    if (!results.length) {
      return res.status(204).send('There are no items to display');
    }
      return res.status(200).send(results);
  });
}
//Update Item 
const updateItem = (req, res) => {
  const {id} = req.params;
  const {title, price, urlImage, description, urlVideo, stock, itemCategory} = req.body;

  if(!title || !price || !urlImage || !description || !urlVideo || !stock || !itemCategory){
    return res.status(400).send('All fields are required')
  }

  item.updateItem(id, newDataItem, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to update item: ${error}`);
    }
      return res.status(200).send(results);
  });
}
//Delete item
const deleteItem = (req, res) => {
  const {id} = req.params;
  item.deleteItem(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to delete item: ${error}`);
    }
      return res.status(200).send(results);
  });
}
module.exports = {
  createItem,
  getAllItems,
  getAllItemsByCategory,
  getItemById,
  updateItem,
  deleteItem
}