const express = require("express"); // required installed packages
const bodyParser = require("body-parser");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const port = 8080
const api = "api"
const app = express(); // app constant by using express
app.use(bodyParser.json());
app.use(cors(corsOptions));



app.get(`/${api}`, function (req, res) {
    res.json({"user":"Khaled"})
});



app.listen(port, function () {
    console.log("Server is running on port: "+port);
});

