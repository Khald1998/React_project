const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 7003;
const dbUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cluster';

mongoose.connect(dbUrl)
.then(() => {
  console.log("Find's MS is connected to database");
  mongoose.set('debug', false);
}).catch((err) => {
  console.log("Error connecting to database", err);
});


app.get("/:id", async (req, res) => {
  try {
    const data = await MySchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
    console.log(`Find is running on port: ${port}`);
});
