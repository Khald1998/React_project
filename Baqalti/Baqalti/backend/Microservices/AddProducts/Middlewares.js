require('dotenv').config();
const User = require('./models/User.js');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;

const verifyToken = async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
      return res.status(400).json({ message: 'No token was given' });
  }

  try {
      const data = await jwt.verify(token, jwtSecret);
      const doc = await User.findById(data.id);
      if (!doc) {
          return res.status(401).json({ message: 'User not found' });
      }
      req.userId = data.id
      next();
  } catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Invalid Bearer token' });
  }
};

function validateInputs(req, res, next) {
  const { name, cost, quantity } = req.body;

  // Check if name is a string
  if (typeof name !== 'string') {
    return res.status(400).json({ message: 'Invalid name. Name must be a string.' });
  }

  // Check if cost is an integer
  if ( typeof cost !== 'number') {
    return res.status(400).json({ message: 'Cost must be an integer' });
  }


  // Check if quantity is an integer
  if (!Number.isInteger(quantity)) {
    return res.status(400).json({ message: 'Invalid quantity. Quantity must be an integer.' });
  }

  // All inputs are valid, proceed to the next middleware or route handler
  next();
}


module.exports = {
  verifyToken,
  validateInputs
};




