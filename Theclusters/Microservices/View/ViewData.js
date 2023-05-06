const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
const app = express();

const port = process.env.PORT || 7002;
const dbUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cluster';

mongoose.connect(dbUrl)
.then(() => {
  console.log("Connected to database");
  mongoose.set('debug', false);
}).catch((err) => {
  console.log("Error connecting to database", err);
});


app.get('/View', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const data = await MySchema.find({});
    if (data.length === 0) {
      res.status(404).send("No Request Found");
    } else {
      const results = data.map(({ _id, name, phone, idea, cluster ,createdAt}) => ({
        _id
        ,name
        ,phone
        ,idea
        ,cluster
        ,createdAt
      }));
      res.send(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});