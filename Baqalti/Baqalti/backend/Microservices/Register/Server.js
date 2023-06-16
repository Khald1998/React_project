const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(
));

const port = process.env.PORT || 7040;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
  .then(() => console.log('Register is connected to MongoDB'))
  .catch((err) => console.log(err));

app.post('', async (req, res) => {
  const { name, phone, email, username, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ name, phone, email, username, password: hashedPassword, adminPrivilege:false });
    res.status(200).send({ message: 'You are registered' });
  } catch (err) {
    res.status(err.code === 11000 ? 400 : 500).send({ message: err.code === 11000 ? 'Phone number or Email already exists' : 'Internal server error' });
  }
});
  


app.listen(port, () => {
  console.log(`Register is running on port: ${port}`);
});
