const connection = require('../db/connection');

const checkEmailExist = async (email) => {
  const sqlQuery = 'SELECT * FROM users WHERE email = ?'
  try {
    const existingUser = await new Promise((resolve, reject) => {
      connection.query(sqlQuery, email, (error, existingUser) => {
        if (error) {
          reject(error); 
        } else {
          resolve(existingUser); 
        }
      });
    });
    return existingUser;
  } catch (error) {
    console.error('Error al verificar el correo electrónico:', error.message);
    throw error;
  }
}

const registerUser = async (dataNewUser, callBack) => {
  const sqlQuery = 'INSERT INTO users SET ?';
  connection.query(sqlQuery,dataNewUser, callBack);
};

const getAllAdmins = async (callBack) => {
  const sqlQuery = 'SELECT * FROM users WHERE role = 1';
  connection.query(sqlQuery, callBack);
}
const getAllCustomers = async (callBack) => {
  const sqlQuery = 'SELECT * FROM users WHERE role = 2';
  connection.query(sqlQuery, callBack);
}

const getUserById = async (id, callBack) => {
  const sqlQuery = 'SELECT * FROM users WHERE id = ?';
  connection.query(sqlQuery, id, callBack);
}

const updateUser = async (id, newUserData, callBack) => {
  const sqlQuery = 'UPDATE users SET ? WHERE id = ?';
  connection.query(sqlQuery, [newUserData, id], callBack);
}

const deleteUser = async (id, callBack) => {
  const sqlQuery = 'DELETE FROM  users WHERE id = ?';
  connection.query(sqlQuery, id, callBack);
}

module.exports = {
  registerUser,
  checkEmailExist,
  getAllAdmins,
  getAllCustomers,
  getUserById,
  updateUser,
  deleteUser
}