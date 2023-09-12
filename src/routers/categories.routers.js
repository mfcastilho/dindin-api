const express = require('express');
const categoriesRouter = express.Router();
const { categoriesList } = require('../controllers/categories.controllers');
const { verifyToken } = require('../middlewares/index');

categoriesRouter.get('/', 
  verifyToken, 
  categoriesList
);

module.exports = categoriesRouter;
