const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
const Product = require('./models/product.js');
const Store = require('./models/store.js');
const cookieParser = require('cookie-parser');
const UserStore = require('./models/user_store.js');
const ProductModel = require('./models/product.js');

require('dotenv').config();
const app = express();

const jwtSecret = ";alskdfhjak;sjf;laksnhf";

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }));

app.get('/test', (req, res) => {
    res.send('Hello World!');
});
// test1234
// 5.246.109.74/32

mongoose.connect('mongodb+srv://myapp:myapp123123@tcoc.ii33cir.mongodb.net/User')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));


app.get('/basket', async (req, res) => {
    const { userId } = req.body;
    const userDoc = await User.findById(userId);
    const products = userDoc.products;
    let productsList = [];


    products.forEach((product) => {
        const storeDoc = Store.findById(product.key);
        const productDoc = storeDoc.products.find((product) => product.id === product.key);
        productsList.push(productDoc);

    });

    if (productsList.length > 0) {
        res.send(productsList);
    } else {
        res.send(null);
    }

});

app.post('/store', async (req, res) => {
    try {
        const { name, city, region, products } = req.body;
        const storeDoc = await Store.create({
            name,
            city,
            region,
            products
        });
        res.send(storeDoc);
    } catch (error) {
        res.status(500).send('An error occurred while creating the store.');
    }
});


app.get('/store', async (req, res) => {
    const { storeId } = req.body;
    const storeDoc = await Store.findById(storeId);
    res.send(storeDoc);
});

app.get('/stores', async (req, res) => {
    const storesDoc = await Store.find({});
    res.send(storesDoc);
});

app.post('/add_store_product', async (req, res) => {
    const { storeId, storeName, name, price, quantity } = req.body;
    const storeDoc = await Store.findById(storeId);

    storeDoc.products.push(ProductModel(
        {
            _id: new mongoose.Types.ObjectId(),
            storeId,
            storeName,
            name,
            price,
            quantity,
        }

    ));

    await storeDoc.save();

    res.send(storeDoc);
}
);


app.post('/add_basket_product', async (req, res) => {
    const { userId, storeId, productId, quantity } = req.body;
    await UserStore.create({
        userId,
        storeId,
        productId,
        quantity,
    });

    res.send("done");

});

app.delete('/remove_basket_product', async (req, res) => {
    const { userId, storeId, productId } = req.query;
    console.log(userId, storeId, productId);
    const userStoreProductDoc = await UserStore.findOneAndDelete({ userId, storeId, productId });

    if (userStoreProductDoc) {
        res.send("done");
    } else {
        res.send("not found");
    }


});

app.get('/check_if_added', async (req, res) => {
    const { productId, storeId, userId } = req.query;

    const userStoreProductDoc = await UserStore.findOne({ userId, storeId, productId });
    if (userStoreProductDoc) {

        res.send(true);
    } else {

        res.send(false);
    }
});

app.get('/basket_products', async (req, res) => {

    const userId = req.query.userId;
    const userStoresProducts = await UserStore.find({ _id: { $regex: `${userId}_.*` } });
    const storesId = userStoresProducts.map((userStoreProduct) => userStoreProduct.storeId);
    const stores = await Store.find({ _id: { $in: storesId } });


    let products = []

    userStoresProducts.forEach((userStoreProduct) => {
        stores.map((store) => {
            store.products.filter((product) => {

                if (userStoreProduct.productId === (product['_id'].valueOf())) {

                    products.push(ProductModel({

                        _id: product['_id'],
                        name: product['name'],
                        quantity: userStoreProduct.quantity,
                        price: product['price'],
                        storeId: store._id.valueOf(),
                        storeName: store.name,


                    }))
                }


            })
        })
    })




    res.send(products);
});

app.put('/decrease_quantity', async (req, res) => {
    const { userId, storeId, productId, quantity } = req.body;
    const userStoreProductDoc = await UserStore.findOne({ userId, storeId, productId });
    userStoreProductDoc.quantity = quantity;
    await userStoreProductDoc.save();

    res.send(userStoreProductDoc);
});

app.put('/increase_quantity', async (req, res) => {
    const { userId, storeId, productId, quantity } = req.body;
    const userStoreProductDoc = await UserStore.findOne({ userId, storeId, productId });
    userStoreProductDoc.quantity = quantity;
    await userStoreProductDoc.save();

    res.send(userStoreProductDoc);
});

// app.post('/basket_product', async (req, res) => {
//     const { userId, storeId, productId } = req.body;
//     const userStoreProductDoc = await UserStore.create({
//         userId,
//         storeId,
//         productId
//     });
//     res.send(userStoreProductDoc);
// });


app.listen(4000);