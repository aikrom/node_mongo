const express = require('express');
const { dbConnect } = require('./db');

const app = express();

const PORT = process.env.SERVER_PORT || 8000;

dbConnect();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(PORT, function() {
  console.log(`Server start on port: ${PORT}`);
});
