const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config();

const jwtSecret = process.env.SECRET;

// Middleware function
const verifyToken = (req, res, next) => {
    const { token } = req.cookies;
    console.log(token)
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
        if (err) {
            return res.status(401).json({ 'message': 'invalid Bearer token' });
        }

        User.findById(userData.id)
            .then((userDoc) => {
                req.userData = {
                    name: userDoc.name,
                    username: userDoc.username,
                    email: userDoc.email,
                    phone: userDoc.phone,
                };
                next();
            })
            .catch((err) => {
                res.status(401).json({ 'message': err });
            });
    });
};



module.exports = {
    verifyToken
};