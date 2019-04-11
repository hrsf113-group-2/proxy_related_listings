const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));
 
app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(3000)