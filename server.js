const express = require('express');
const { dbConnect } = require('./db');

const app = express();

const { SERVER_PORT } = process.env;

dbConnect();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.get('/test', function(req, res) {
  res.send('Test request!');
});

app.listen(SERVER_PORT, function() {
  console.log(`Server start on port: ${SERVER_PORT}`);
});
