const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const middleware = require('./Middlewares');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7030;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
    .then(() => console.log('Profile is connected to MongoDB'))
    .catch((err) => console.log(err));


app.post('', middleware.verifyToken, (req, res) => {
    const data = req.userData;
    res.json(data);
});


app.listen(port, () => {
    console.log(`Profile is running on port: ${port}`);
});
