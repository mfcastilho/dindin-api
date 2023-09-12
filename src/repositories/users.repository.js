const dbConnection = require('../database/connection/index');
const bcryptjs = require('bcryptjs');

const users = {
  findByPk: (id)=>{
    return dbConnection.query(`SELECT id, nome, email FROM usuarios WHERE id = $1;`, [id]);
  },
     
  findOne: (field, value)=>{
    return dbConnection.query(`SELECT * FROM usuarios WHERE ${field} = $1;`, [value]);
  },

  create: async (data)=>{
    const { nome, email, senha } = data;
    const cryptedPassword = await bcryptjs.hash(senha, 10);

    return dbConnection.query(`
      INSERT INTO usuarios
        (nome, email, senha)
      VALUES
        ($1, $2, $3) returning *;`, 
    [nome, email, cryptedPassword]);
  },

  update: (data, id)=>{
    const { nome, email, senha } = data;

    return dbConnection.query(`
      UPDATE usuarios
      SET 
        nome = $1, 
        email = $2, 
        senha = $3
      WHERE id = $4 
      RETURNING *;`, 
    [nome, email, senha, id]);
  }
}

module.exports = users;
