const { AppError } = require('../errors');
const userRepository = require('../repositories/users.repository');
const bcryptjs = require('bcryptjs');

const user = {
  userRegister: async (data)=>{
    const userRegistered = await userRepository.create(data);
    const { senha, ...userCreated } = userRegistered.rows[0]

    return userCreated;
  },

  detailUser: async (decoded)=>{
    const { rows:user } = await userRepository.findOne('id', decoded.id);
    const { senha, ...userLogged } = user[0];
               
    return userLogged;
  },

  editUser: async (userData, decoded)=>{
    const { nome, email, senha } = userData;
    const cryptPassword = await bcryptjs.hash(senha, 10);
               
    return await userRepository.update({ nome, email, senha:cryptPassword }, decoded.id);
  }
}

module.exports = user;
