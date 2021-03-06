'use strict';

const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');
// const pg = require('pg');
const cors = require('cors');
const superAgent = require('superagent');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// test route
app.get('/', (req, res) => {
  res.send('Route Successful');
});

// test API call
app.get('/quote', (req, res) => {
  superAgent.get('https://api.iextrading.com/1.0/stock/fb/batch?types=quote')
    .then(data => {
      console.log(data.body.quote);
      res.send(data.body.quote);
    })
    .catch(err => console.error(err));
});

// test stock symbol search API call
app.get('/symbol', (req, res) => {
  superAgent.get('')
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
});