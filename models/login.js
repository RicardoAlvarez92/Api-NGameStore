const jwt = require('jsonwebtoken');

const generateAccessToken = (adminToken) => {
    return jwt.sign(adminToken, process.env.SECRET_KEY_JWT, {expiresIn: '1h'})
}

module.exports = {
    generateAccessToken
}