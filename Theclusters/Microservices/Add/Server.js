const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 7001;
const dbUrl = process.env.MONGODB_URL ||'mongodb://127.0.0.1:27017/cluster';
const url = process.env.CLIENT_URL || 'http://localhost:3000';


// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(dbUrl)
.then(() => {
  console.log("Add's MS is Connected to database");
}).catch((err) => {
  console.log("Error connecting to database", err);
});

const validateTypes = (req, res, next) => {
  const { name, phone, idea, cluster } = req.body;
  if (
    typeof name !== 'string' ||
    typeof phone !== 'number' ||
    typeof idea !== 'string' ||
    typeof cluster !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid data types' });
  }
  next();
};

app.post('', async (req, res) => {
  console.log(req.body)
    try {
    const { name, phone, idea, cluster } = req.body;
    const newRequest = new MySchema({ name, phone, idea, cluster });
    await newRequest.save();
    // res.json({'message':`${name} was added!`})
    res.redirect('/Requests')
  } catch (err) {
    console.log(err)
    res.status(500).json({'error':"Internal Server Error"});
  }
});

app.listen(port, () => {
    console.log(`Add is running on port: ${port}`);
});




