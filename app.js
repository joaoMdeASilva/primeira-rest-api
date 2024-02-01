const express = require('express');
const app = express();
const produtos = require('./routes/produtos');
const princial = require('./routes/princiapl');

app.use('/', princial);
app.use('/produtos',  produtos);

module.exports = app;