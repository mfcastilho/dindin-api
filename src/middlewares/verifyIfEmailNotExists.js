const { AppError } = require('../errors');
const { userRepository } = require('../repositories/index');

const verifyIfEmailNotExists = async (req, res, next) => {
  const { email } = req.body;

  const queryResult = await userRepository.findOne('email', email);
  const emailExists = queryResult.rows[0];

  if (!emailExists) throw new AppError('Email e/ou senha incorretos.', 401);

  return next();

}

module.exports = verifyIfEmailNotExists;
