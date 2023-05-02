const express = require("express");
const mongoose = require('mongoose');
const cron = require('node-cron');
const MySchema = require('./MySchema');
const app = express();

const port = process.env.PORT || 7004;
const dbUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cluster';
const deleteTime = process.env.MINUTES_TO_KEEP_RECORDS || 180;

mongoose.connect(dbUrl)
.then(() => {
  console.log("Connected to database");
  mongoose.set('debug', false);
}).catch((err) => {
  console.log("Error connecting to database", err);
});

cron.schedule('* * * * *', async () => {
  try {
    // Calculate the date X minutes ago
    const date = new Date();
    date.setMinutes(date.getMinutes() - deleteTime);

    // Delete records older than the calculated date
    const result = await MySchema.deleteMany({ createdAt: { $lt: date } });
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
