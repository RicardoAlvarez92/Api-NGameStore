const user = require('../models/user');
const bcrypt = require('bcrypt');


//Register new user
const registerUser = async (req, res) => {
  const {firstName, lastName, email, password, role} = req.body;

  if(!(firstName || lastName || email || password)) {
    return res.status(400).send(`All fields are required`);
  }

  const existingUserResults = await user.checkEmailExist(email);

  if(existingUserResults.length) {
    return res.status(409).send('The email entered has already been registered.');
  }

  const salt = await bcrypt.genSalt(12);
  const passHash = await bcrypt.hash(password, salt);
  const dataNewUser = {
    firstName,
    lastName,
    email,
    password: passHash,
    role
  }
  await user.registerUser(dataNewUser, (error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to register a new user: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Get all customers
const getAllAdmins = (req, res) => {
  user.getAllAdmins((error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to fetch all admins: ${error}`);
    } else if (!results.length) {
      return res.status(204).send('There are no users');
    }
    return res.status(200).send(results);
  });
}

//Get all Customers
const getAllCustomers = (req, res) => {
  user.getAllCustomers((error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to fetch all customers: ${error}`);
    } else if (!results.length) {
      return res.status(204).send('There are no users')
    }
      return res.status(200).send(results);
  });
}
//Get user by id
const getUserById = (req, res) => {
  const {id} = req.params;
  user.getUserById(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to fetch user by ID: ${error}`);
    } else if (!results.length){
      return res.status(204).send('There are no user');
    }
      return res.status(200).send(results);
  });
}

//Update User
const updateUser = (req, res) => {
  const {id} = req.params;
  const {firstName, lastName, address} = req.body;
  if (!firstName || !lastName || !address) {
    return res.status(400).send('All fields are Required to update');
  }
  const newUserData = {
    firstName,
    lastName,
    address
  }
  user.updateUser(id, newUserData, (error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to update the user: ${error}`);
    }
      return res.status(200).send(results);
  });
}

//Delete User 
const deleteUser = (req, res) => {
  const {id} = req.params;
  user.deleteUser(id, (error, results) => {
    if (error) {
      return res.status(500).send(`Error while trying to delete the user: ${error}`);
    }
      return res.status(200).send('Usuario eliminado con exito');
  });
}

module.exports = {
  registerUser,
  getAllAdmins,
  getAllCustomers,
  getUserById,
  updateUser,
  deleteUser
}