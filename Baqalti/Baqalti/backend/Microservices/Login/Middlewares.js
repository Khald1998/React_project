const User = require('./models/User.js');
const bcrypt = require('bcryptjs');

function verifyEmail(req, res, next) {
  const { email } = req.body;
  User.findOne({ email })
  .then((docs) => {
      if (docs) {
          req.docs = docs;
          next();
      } else {
          res.status(401).json({ message: "Invalid Email" });
      }
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
  });
}

function verifyPassword(req, res, next) {
  const { password } = req.body;
  const passwordMatch = bcrypt.compareSync(password, req.docs.password);
  if (passwordMatch) {
      next();
  } else {
      res.status(401).json({ message: "Invalid Password" });
  }

}

module.exports = {
  verifyEmail,
  verifyPassword
};