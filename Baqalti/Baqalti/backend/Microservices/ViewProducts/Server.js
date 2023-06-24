const express = require("express");
const mongoose = require('mongoose');
const Products = require('./models/Products');
const User = require('./models/User');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(
));

const port = process.env.PORT || 7050;
const dbUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Baqalti';

mongoose.connect(dbUrl)
  .then(() => console.log('ViewProducts is connected to MongoDB'))
  .catch((err) => console.log(err));

app.get('', async (req, res) => {
  try {
    const products = await Products.find({});
    const updatedProducts = await Promise.all(products.map(async (product) => {
      const user = await User.findById(product.userId);
      return {
        ...product._doc,
        owner: user ? user.name : null
      };
    }));
    if (updatedProducts.length === 0) {
      res.status(404).json({ massage: 'No Products Found' });
    } else { res.status(200).json(updatedProducts); }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});



app.listen(port, () => {
  console.log(`ViewProducts is running on port: ${port}`);
});
