const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 7060;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
    .then(() => console.log('isEmailUsed is connected to MongoDB'))
    .catch((err) => console.log(err));


    app.post('', (req, res) => {
        const email = req.body.email;
        // Check if the email exists in the database
        User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } })
          .then(user => {
            if (user) {
              // Email already exists
              res.json({ exists: true });
            } else {
              // Email does not exist
              res.json({ exists: false });
            }
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      });
      


app.listen(port, () => {
    console.log(`isEmailUsed is running on port: ${port}`);
});
