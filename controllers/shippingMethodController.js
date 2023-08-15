const shippingMethod = require('../models/shippingMethod');

//create shipping method
const createShippingMethod = (req, res) => {
  const {title, cost, deliveryTime, trackingUrl} = req.body;

  if(!title || !cost || !deliveryTime || !trackingUrl) {
      return res.status(400).send('All fields are required');
  }

  const dataNewShippingMethod = {
    title,
    cost,
    deliveryTime,
    trackingUrl
  }

  shippingMethod.createShippingMethod(dataNewShippingMethod, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to create shipping method: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Get all shipping method
const getAllShippingMethod = (req, res) => {
  shippingMethod.getAllShippingMethod((error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fetch shipping methods: ${error}`);
    }
    if (!results.length){
      return res.status(204).send('No content');
    }
      return res.status(200).send(results);
  });
}

//Get shipping method by id
const getShippingMethodById = (req, res) => {
  const {id} = req.params;
  shippingMethod.getShippingMethodById(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to fecth shipping method by id: ${error}`);
    }
    if (!results.length){
      return res.status(204).send('No content')
    }
      return res.status(200).send(results);
  });
}

//Update shipping method
const updateShippingMethod = (req, res) => {
  const {id} = req.params;
  const {title, cost, deliveryTime, trackingUrl, status} = req.body;

  if(!title || !cost || !deliveryTime, !trackingUrl || !status) {
      return res.status(400).send('All fields are required');
  }

  const newDataShippingMethod = {
    title,
    cost,
    deliveryTime,
    trackingUrl,
    status
  }

  shippingMethod.updateShippingMethod(id, newDataShippingMethod, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to update shipping method: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Delete shipping method
const deleteShippingMethod = (req, res) => {
  const {id} = req.paramas;
  shippingMethod.deleteShippingMethod(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error whiles trying to delete shipping method: ${error}`);
    }
      return res.status(200).send(results);
  });
}

module.exports = {
  createShippingMethod,
  getAllShippingMethod,
  getShippingMethodById,
  updateShippingMethod,
  deleteShippingMethod
}