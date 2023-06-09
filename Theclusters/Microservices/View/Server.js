const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 7002;
const dbUrl = process.env.MONGODB_URL ||'mongodb://127.0.0.1:27017/cluster';

mongoose.connect(dbUrl)
.then(() => {
  console.log("View's MS is connected to database");
}).catch((err) => {
  console.log("Error connecting to database", err);
});


app.get('', async (req, res) => {
  try {
    const data = await MySchema.find({});
    if (data.length === 0) {
      res.status(404).json({"messages":"No Request Found"});
    } else {
      const results = data.map(({ _id, name, phone, idea, cluster ,createdAt}) => ({
        _id
        ,name
        ,phone
        ,idea
        ,cluster
        ,createdAt
      }));
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({"messages":"Internal Server Error"});
  }
});

app.listen(port, () => {
    console.log(`View is running on port: ${port}`);
});
