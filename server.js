'use strict';

const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');
// const pg = require('pg');
const cors = require('cors');
// const superAgent = require('superagent');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// test route
app.get('/', (req, res) => {
  res.send('Route Successful');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
});