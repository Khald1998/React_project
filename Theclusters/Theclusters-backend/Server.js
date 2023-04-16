const express = require("express"); // required installed packages
const bodyParser = require("body-parser");
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

const port = 8080
// Initialize an empty object with id and name
const Data = {
    id: null,
    name: '',
    phone: '',
    idea: ''
};

// Initialize an empty array with the same object type
const DataArray = [];


const app = express(); // app constant by using express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));



app.get('/Data', function (req, res) {
    res.json(DataArray);
});

app.post('/data', (req, res) => {
    data = req.body
    console.log(data);
    const newData = { id: DataArray.length+1, name: data.name, phone: data.phone, idea: data.idea };
    DataArray.push(newData);
    res.redirect('http://localhost:3000/');
});

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});

