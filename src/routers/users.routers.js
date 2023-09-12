const express = require('express');
const usersRouter = express.Router();
const { 
  userRegister, 
  detailUser, 
  editUser 
} = require('../controllers/users.controllers');
const { 
  verifyEmail, 
  verifyFields, 
  verifyToken,
  verifyEmailFormat
} = require('../middlewares/index');

usersRouter.post('/', 
  verifyFields, 
  verifyEmailFormat, 
  verifyEmail, 
  userRegister
);

usersRouter.get('/', 
  verifyToken, 
  detailUser
);

usersRouter.put('/', 
  verifyToken, 
  verifyFields, 
  verifyEmailFormat, 
  verifyEmail, 
  editUser
);

module.exports = usersRouter;
