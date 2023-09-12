const userRepository = require('../repositories/users.repository');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginService = async (userData)=>{
  const { email } = userData;
  const { rows: user } =  await userRepository.findOne('email', email);

  const token = jwt.sign(
    { id: user[0].id },
    process.env.SECRET_KEY, 
    { expiresIn: process.env.EXPIRES_IN }
  );

  const { senha, ...userLogged } = user[0];

  return { usuario: userLogged, token };
}

module.exports = loginService;
