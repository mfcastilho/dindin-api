const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/login.controllers');
const { 
  verifyFields, 
  verifyIfEmailNotExists, 
  verifyLoginPassword, 
  verifyEmailFormat 
} = require('../middlewares/index');

loginRouter.post('/', 
  verifyFields, 
  verifyEmailFormat, 
  verifyIfEmailNotExists, 
  verifyLoginPassword, 
  loginController
);

module.exports = loginRouter;
