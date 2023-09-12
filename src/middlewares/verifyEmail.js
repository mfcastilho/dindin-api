const { AppError } = require('../errors');
const { userRepository } = require('../repositories/index');

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  const queryResult = await userRepository.findOne('email', email);
  const emailExists = queryResult.rows[0];
 
  if (emailExists) throw new AppError('Já existe usuário cadastrado com o e-mail informado.', 409);

  return next();
}

module.exports = verifyEmail;
