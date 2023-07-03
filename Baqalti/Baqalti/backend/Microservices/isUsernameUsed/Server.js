const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 7070;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
    .then(() => console.log('isUsernameUsed is connected to MongoDB'))
    .catch((err) => console.log(err));


    app.post('', (req, res) => {
        const {username} = req.body;
        // Check if the username exists in the database
        User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } })
          .then(user => {
            if (user) {
              // username already exists
              res.json({ exists: true });
            } else {
              // username does not exist
              res.json({ exists: false });
            }
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      });
      


app.listen(port, () => {
    console.log(`isUsernameUsed is running on port: ${port}`);
});
