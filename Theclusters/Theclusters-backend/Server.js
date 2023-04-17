const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('cron');


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};

const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/cluster';
const X = process.env.TIME_TO_DELETE || (2 * 24 * 60);

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

const personSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  idea: String,
  cluster: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Person = mongoose.model('Person', personSchema);

app.get('/DataAll', async (req, res, next) => {
  try {
    // Calculate the date X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - X);

    // Delete records older than the calculated date
    const result = await Person.deleteMany({ createdAt: { $lt: date } });

    console.log(`Deleted ${result.deletedCount} record(s)`);
  } catch (err) {
    console.error(err);
  }
  try {
    const people = await Person.find({});
    if (people.length === 0) {
      res.status(404).send("No Person Found");
    } else {
      const results = people.map(({ _id, name, phone, idea, cluster, createdAt }) => ({
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
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/Find/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params._id);
    res.json(person);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.post('/DataAdd', async (req, res, next) => {
  try {
    const { name, phone, idea, cluster } = req.body;
    const newPerson = new Person({ name, phone, idea, cluster });
    await newPerson.save();
    console.log(`${name} was added!`);
    res.redirect('http://localhost:3000/');
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
const job = new cron.CronJob(`0 */${X} * * * *`, async () => {
  try {
    // Calculate the date X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - X);

    // Delete records older than the calculated date
    const result = await Person.deleteMany({ createdAt: { $lt: date } });

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
