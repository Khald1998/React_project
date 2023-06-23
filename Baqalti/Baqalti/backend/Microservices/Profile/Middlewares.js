const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config();

const jwtSecret = process.env.SECRET;

// Middleware function
const verifyToken = async (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ message: 'No token was given' });
    }

    try {
        const userData = await jwt.verify(token, jwtSecret);
        const userDoc = await User.findById(userData.id);
        if (!userDoc) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.userData = {
            name: userDoc.name,
            username: userDoc.username,
            email: userDoc.email,
            phone: userDoc.phone,
        };
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({ message: 'Invalid Bearer token' });
    }
};



module.exports = {
    verifyToken
};