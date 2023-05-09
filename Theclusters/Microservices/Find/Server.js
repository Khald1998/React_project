const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
const app = express();

const port = process.env.PORT || 7003;
const dbUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cluster';

mongoose.connect(dbUrl)
.then(() => {
  console.log("Connected to database");
  mongoose.set('debug', false);
}).catch((err) => {
  console.log("Error connecting to database", err);
});


app.get("/Find/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
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
