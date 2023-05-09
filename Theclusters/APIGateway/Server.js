const express = require('express');
const request = require('request');

const app = express();
app.use(express.json());

const port = process.env.PORT ||8080;
const ADD = process.env.ADD ||"http://localhost:7001/Add";
const FIND = process.env.FIND ||"http://localhost:7003/Find";
const VIEW = process.env.VIEW ||"http://localhost:7002/View";

app.post('/Add', (req, res) => {
  const { name, phone, idea, cluster } = req.body;
  request.post(ADD, {
    json: { name, phone, idea, cluster }
  }, (error, response, body) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(body);
    }
  });
});

app.get('/View', (req, res) => {
    request.get(VIEW, (error, response, body) => {
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
