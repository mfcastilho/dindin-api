const verifyCategory = require('./verifyCategory');
const verifyEmail = require('./verifyEmail');
const verifyToken = require('./verifyToken');
const verifyTransaction = require('./verifyTransaction');
const verifyIfEmailNotExists = require('./verifyIfEmailNotExists');
const verifyLoginPassword = require('./verifyLoginPassword'); 
const verifyFields = require('./verifyFields');
const verifyEmailFormat = require('./verifyEmailFormat');

module.exports = {
  verifyCategory,
  verifyEmail,
  verifyToken,
  verifyTransaction,
  verifyIfEmailNotExists,
  verifyLoginPassword,
  verifyFields,
  verifyEmailFormat
}
