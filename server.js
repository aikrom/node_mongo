const express = require('express');
const mongoose = require('mongoose');

const app = express();

const {
  SERVER_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then(function() {
  console.log('MongoDB is connected');
}).catch(function(err) {
  console.log(err)
});

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.get('/test', function(req, res) {
  res.send('Test request!');
});

app.listen(SERVER_PORT, function() {
  console.log(`Server start on port: ${SERVER_PORT}`);
});
