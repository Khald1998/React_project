const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.SECRET;

async function verifyToken(req, res, next) {
  const token = req.body.token;
  if (!token) {
    console.log('No token was found')
    return next();
  }

  jwt.verify(token, jwtSecret, {}, (err, userData) => {
    if (err) {
      console.log(err);
      console.log('The token is bad')
      return next();
    }
    User.findById(userData.id)
      .then((docs) => {
        res.json({ "used token": token, "message": "Login was successful by token", "admin": docs.adminPrivilege });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ message: "An error occurred" });
      });
  })
}

function verifyStrings(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  req.email = email;
  req.password = password;
  return next();
}

function verifyPassword(req, res, next) {
  const email = req.email;
  const password = req.password;

  User.findOne({ email })
    .then((docs) => {
      if (!docs) {
        return res.status(401).json({ message: "Invalid Email" });
      }

      const passwordMatch = bcrypt.compareSync(password, docs.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid Password" });
      }

      req.adminPrivilege = docs.adminPrivilege;
      req.token = jwt.sign({ id: docs._id, email: docs.email }, jwtSecret, { expiresIn: 1800 });

      return next();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });




}

module.exports = {
  verifyToken,
  verifyStrings,
  verifyPassword
};
