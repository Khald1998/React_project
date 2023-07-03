const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 7080;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
    .then(() => console.log('isPhoneUsed is connected to MongoDB'))
    .catch((err) => console.log(err));


    app.post('', (req, res) => {
        const {phone} = req.body;
        // Check if the phone exists in the database
        User.findOne({phone})
          .then(user => {
            if (user) {
              // phone already exists
              res.json({ exists: true });
            } else {
              // phone does not exist
              res.json({ exists: false });
            }
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      });
      


app.listen(port, () => {
    console.log(`isPhoneUsed is running on port: ${port}`);
});
