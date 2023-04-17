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
    id: '',
    name: '',
    phone: '',
    idea: '',
    claster: ''
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
    console.log(req.body);
    const newData = { id: `${DataArray.length+1}`, name: req.body.name, phone: req.body.phone, idea: req.body.idea,claster:req.body.cluster };
    DataArray.push(newData);
    res.redirect('http://localhost:3000/');
});

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});

