const user = require('../models/user');
const bcrypt = require('bcrypt');
const login = require('../models/login');

//Login admin
const loginAdmin = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(!(email && password)) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    const existingUserResults = await user.checkEmailExist(email);

    if (!existingUserResults.length) {
      return res.status(409).json({
        error: 'The email is not registered'
      })
    }

    const passwordHash = existingUserResults[0].password
    if(await bcrypt.compare(password, passwordHash)) {
      const userToken = {
        email: existingUserResults[0].email,
        id: existingUserResults[0].id,
        role: existingUserResults[0].role
      }
      const accessToken = login.generateAccessToken(userToken);
      res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        token: accessToken
      })
    }
  } catch (error) {
    return res.status(500).send(`Server error: ${error}`);
  }
  }

  module.exports = {
    loginAdmin
  }