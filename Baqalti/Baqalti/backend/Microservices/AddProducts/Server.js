const express = require("express");
const mongoose = require('mongoose');
const Products = require('./models/Products');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const middleware = require('./Middlewares');



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 7000;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
    .then(() => console.log('AddProducts is connected to MongoDB'))
    .catch((err) => console.log(err));



app.post('', middleware.verifyToken,middleware.validateInputs,async(req, res) => {
    const userId = req.userId
    const { name, cost, quantity } = req.body;
    try {
        const ProductsDoc = await Products.create({userId ,name, cost, quantity, });
        console.log(ProductsDoc)
        res.json({'message':'itme was added'});
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Internal server error ' });
    }

});




app.listen(port, () => {
    console.log(`AddProducts is running on port: ${port}`);
});
