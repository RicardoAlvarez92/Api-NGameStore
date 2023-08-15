const auth = require('../models/auth');

const validateToken = (req, res, next) => {

  const accessToken = req.headers['authorization'] || req.query.accesstoken;
  if (!accessToken) {
    return res.status(401).send('Unauthorized access without token');
  }
  auth.validateToken(accessToken, (error, results) => {
    if (error) {
      return res.status(401).send('The token has expired or is incorrect');
    }
    const { role, id } = results;
    if (role === 1) {
      next();
    } else if (req.params.id) {
      try {
        const idparams = parseInt(req.params.id);
        if (!(idparams === id)) {
          return res.status(403).send('Access forbidden');
        }
      } catch (error) {
        return res.status(500).send('Error comparing IDs');
      }
      next();
    } else {
      return res.status(403).send('Access forbidden');
    }
  });
};

module.exports = {
  validateToken

}