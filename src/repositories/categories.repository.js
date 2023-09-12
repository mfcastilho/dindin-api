const dbConnection = require('../database/connection/index');

const categories = {
  findAll: ()=>{
    return dbConnection.query(`SELECT * FROM categorias;`);
  },

  findByPk: (id)=>{
    return dbConnection.query(`SELECT * FROM categorias WHERE id = $1;`, [id]);
  }
}


module.exports = categories;
