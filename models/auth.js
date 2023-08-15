const jwt = require('jsonwebtoken');

const validateToken = async (accesToken, callback) => {
    jwt.verify(accesToken, process.env.SECRET_KEY_JWT, callback)
}

module.exports = {
    validateToken
}