require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;

function cookieJwtAuth(req, res, next) {
  
  const { token } = req.cookies;
  try {
    const user = jwt.verify(token, jwtSecret);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.status(401).json({ 'message': "Authentication failed " });
  }
}
  

module.exports = {
    cookieJwtAuth
  };