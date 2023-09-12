const express = require('express');
require('express-async-errors');
const { json } = require('express');
const { errorHandler } = require('./errors/index.js');
const { 
  categoriesRouter, 
  loginRouter, 
  transactionsRouter, 
  usersRouter 
} = require('./routers/index.js');

const app = express();

app.use(json());

app.use('/categoria', categoriesRouter);
app.use('/login', loginRouter);
app.use('/usuario', usersRouter);
app.use('/transacao', transactionsRouter);

app.use(errorHandler);

module.exports = app;
