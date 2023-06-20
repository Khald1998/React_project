const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtSecret = process.env.SECRET;

function verifyToken(req, res, next) {
  const cookies = Object.keys(req.cookies).length !== 0; 
  const bearer = req.headers.authorization != null;
  console.log('cookies: '+cookies)
  console.log('bearer: '+bearer)
let token;

if (cookies && !bearer) {
  token = req.cookies['token'];
} else if (!cookies && bearer) {
  token = req.headers.authorization.split(' ')[1];
} else {
  token = null;
}

  if (!token) {
    return next();
  }
  jwt.verify(token, jwtSecret, {}, (err, userData) => {
    if (err) {
      return next();
    }
    User.findById(userData.id)
      .then((docs) => {
        req.docs = docs;
        res.cookie('token', token, { maxAge: 900000 }).json({ "used token": token, "message": "Login was successful by token", "admin": docs.adminPrivilege });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({ message: "An error occurred" });
      });
  })

}

function verifyStrings(req, res, next) {
  const email = req.body['email'];
  const password = req.body['password'];

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  req.email = email;
  req.password = password;
  next();

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
