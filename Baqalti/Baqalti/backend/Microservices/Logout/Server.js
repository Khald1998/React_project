const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7020;

app.post('', (req, res) => {
    res.json({'message':' You are logged out'});
});

app.listen(port, () => {
    console.log(`Logout is running on port: ${port}`);
});
