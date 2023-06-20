const express = require('express');
const request = require('request');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const middleware = require('./Middlewares');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 8080;
const AddProducts = process.env.ADD || "http://localhost:7000";
const Login = process.env.LOGIN || "http://localhost:7010";
const Logout = process.env.LOGOUT || "http://localhost:7020";
const Profile = process.env.PROFILE || "http://localhost:7030";
const Register = process.env.REGISTER || "http://localhost:7040";
const ViweProducts = process.env.VIEW || "http://localhost:7050";




app.post('/Add',middleware.AddRequiredFields,middleware.AddFieldType,middleware.verifyTokenExisting, (req, res) => {
  const token = req.token;
  const { name, cost, quantity } = req.body;
  const options = { headers: { Cookie: `token=${token}` }, json: { name, cost, quantity } };
  request.post(AddProducts, options, (error, response, body) => {
    if (response.statusCode != 200) {
      res.status(response.statusCode).json(body);
    } else {
      res.send(body);
    }
  });
});

app.post('/Login',middleware.checkCredentials, middleware.validateCredentials, middleware.validateEmailFormat, (req, res) => {
  const { email, password } = req.body;
  const options = { json: { email, password } };
  request.post(Login, options, (error, response, body) => {
    if (response.statusCode !== 200) {
      res.status(response.statusCode).send(body);
    } else {
      const { token } = body;
      res.cookie("token", token,{ httpOnly: true }).send(body);
    }
  });
});


app.post('/Logout', (req, res) => {
  request.post(Logout, (error, response, body) => {
    if (error) {
      res.status(500).json({ "This is the error: ": error });
    } else {
      res.json(JSON.parse(body));
    }
  });
});

app.post('/Profile',middleware.verifyTokenExisting, (req, res) => {
    const token = req.token;
    request.post(Profile, {
      headers: { Cookie: `token=${token}` },
    }, (error, response, body) => {
      if (response.statusCode != 200) {
        res.status(response.statusCode).json(JSON.parse(body));
      } else {
        res.json(JSON.parse(body));
      }
    });

});

app.post('/Register',middleware.checkRequiredFieldsRegister,middleware.checkRequiredFieldsRegisterType, (req, res) => {
  const { name, phone, email, username, password } = req.body;
  request.post(Register, { json: { name, phone, email, username, password } }, (error, response, body) => {
    if (response.statusCode !== 200) {
      res.status(response.statusCode).json(body);
    } else {
      res.json(body);
    }
  });
});

app.get('/View', (req, res) => {
  request(ViweProducts, (error, response, body) => {
    if (error) {
      res.status(500).json({ error: 'Failed to retrieve products' });
    } else {

      res.status(response.statusCode).json(JSON.parse(body));
    }
  });
});




app.listen(port, () => {
  console.log(`API gateway listening on port ${port}`);
});
