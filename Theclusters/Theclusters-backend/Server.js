const express = require("express");
const mongoose = require('mongoose');
const cron = require('node-cron');
const Request = require('./Request');


const port = 8080;
const dbUrl = 'mongodb://127.0.0.1:27017/cluster';
// const dbUrl ='mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/cluster';
const deleteTime = 5;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(dbUrl)
.then(() => {
  console.log("Connected to database");
  mongoose.set('debug', false);
}).catch((err) => {
  console.log("Error connecting to database", err);
});

app.get('/DataAll', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // Retrieve all records
    const data = await Request.find({});
    if (data.length === 0) {
      res.status(404).send("No Request Found");
    } else {
      // Map records to desired format
      const results = data.map(({ _id, name, phone, idea, cluster, createdAt }) => ({
        _id,
        name,
        phone,
        idea,
        cluster,
        createdAt
      }));
      res.send(results);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});



app.get("/Find/:id", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const data = await Request.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.post('/DataAdd', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const { name, phone, idea, cluster } = req.body;
    const newRequest = new Request({ name, phone, idea, cluster });
    await newRequest.save();
    console.log(`${name} was added!`);
    res.redirect('http://localhost:3000/Requests');
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});



cron.schedule('* * * * *', async () => {
  try {
    // Calculate the date X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - deleteTime);

    // Delete records older than the calculated date
    const result = await Request.deleteMany({ createdAt: { $lt: date } });
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

    if (result.deletedCount!=0){console.log(`${formattedDate} Deleted ${result.deletedCount} record(s)`);}
  } catch (err) {
    console.error(err);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
