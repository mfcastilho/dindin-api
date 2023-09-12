const { AppError } = require('../errors');
const userRepository = require('../repositories/users.repository');
const bcryptjs = require('bcryptjs');

const verifyLoginPassword = async (req, res, next)=>{
  const { email, senha } = req.body;
  const { rows: user } = await userRepository.findOne('email', email);
  const cryptPassword = user[0].senha;
     
  const passwordIsvalid = await bcryptjs.compare(senha, cryptPassword);

  if (!passwordIsvalid) throw new AppError('Email e/ou senha incorretos.', 401);

  return next();
}

module.exports = verifyLoginPassword;
