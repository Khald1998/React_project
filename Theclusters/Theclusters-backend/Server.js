const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('cron');
const Request = require('./Request');


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};

const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/cluster';
const MINUTES_TO_KEEP_RECORDS = process.env.TIME_TO_DELETE || (180);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database");
  mongoose.set('debug', true);
}).catch((err) => {
  console.log("Error connecting to database", err);
});

app.get('/DataAll', async (req, res, next) => {
  try {
    // Delete records older than X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - MINUTES_TO_KEEP_RECORDS);
    const result = await Request.deleteMany({ createdAt: { $lt: date } });
    console.log(`Deleted ${result.deletedCount} record(s)`);

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
  try {
    const data = await Request.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.post('/DataAdd', async (req, res, next) => {
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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Schedule a job to delete old records from the database every X minute(s)
const job = new cron.CronJob(`0 */${MINUTES_TO_KEEP_RECORDS} * * * *`, async () => {
  try {
    // Calculate the date X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - MINUTES_TO_KEEP_RECORDS);

    // Delete records older than the calculated date
    const result = await Request.deleteMany({ createdAt: { $lt: date } });

    console.log(`Deleted ${result.deletedCount} record(s)`);
  } catch (err) {
    console.error(err);
  }
});

// Start the job
job.start();


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
