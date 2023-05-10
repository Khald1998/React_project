const express = require("express");
const mongoose = require('mongoose');
const MySchema = require('./MySchema');
const app = express();

const port = process.env.PORT || 7001;
const dbUrl = process.env.MONGODB_URL || 'mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/cluster';//'mongodb://127.0.0.1:27017/cluster';
const url = process.env.CLIENT_URL || 'http://localhost:3000';


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(dbUrl)
.then(() => {
  console.log("Connected to database");
}).catch((err) => {
  console.log("Error connecting to database", err);
});


app.post('/Add', async (req, res) => {
  try {
    const { name, phone, idea, cluster } = req.body;
    const newRequest = new MySchema({ name, phone, idea, cluster });
    await newRequest.save();
    console.log(`${name} was added!`);
    res.redirect(`${url}/Requests`);
  } catch (err) {
    console.log('error.code : '+error.code);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
    console.log(`Add is running on port: ${port}`);
});
