const express = require('express');
const request = require('request');

const app = express();
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies using query-string library

const port = process.env.PORT ||8080;
const ADD = process.env.ADD ||"http://localhost:7001";
const FIND = process.env.FIND ||"http://localhost:7003";
const VIEW = process.env.VIEW ||"http://localhost:7002";

app.post('/Add', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { name, phone, idea, cluster } = req.body;
  console.log(req.body)
  request.post(ADD, {
    json: { name, phone, idea, cluster }
  }, (error, response, body) => {
    if (response) {
      res.status(response.statusCode).json(response.body);
    } else {
      res.json(response.body);
    }
  });
});

app.get('/View', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    request.get(VIEW, (error, response, body) => {
      
      if (response.statusCode==200) {
        const data = JSON.parse(body);
        res.status(200).json(data);

      } else {
        const data = JSON.parse(body);
        res.status(404).json(data);
      }
    });
});
  
app.get('/Find/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    const { id } = req.params;
    request.get(`${FIND}/${id}`, (error, response, body) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json(JSON.parse(body));
      }
    });
  });
  


app.listen(port, () => {
  console.log(`API gateway listening on port ${port}`);
});
