const express = require("express");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const middleware = require('./Middlewares');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 7010;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';
const jwtSecret = process.env.SECRET ;

mongoose.connect(dbUrl)
    .then(() => console.log('LogIn is connected to MongoDB'))
    .catch((err) => console.log(err));



app.post('',middleware.verifyToken, middleware.verifyStrings,middleware.verifyPassword,(req, res) => {
    res.json({ "new token":req.token, "message": "Login was successful by email" });
});





app.listen(port, () => {
    console.log(`LogIn is running on port: ${port}`);
});
