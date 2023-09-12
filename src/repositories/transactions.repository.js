const dbConnection = require('../database/connection/index');

const transactions = {
  findAllByPk: (id)=>{
    return dbConnection.query(`
      SELECT 
        t.id, 
        t.tipo, 
        t.descricao, 
        t.valor, 
        t.data, 
        t.usuario_id, 
        t.categoria_id, 
        c.descricao AS categoria_nome
      FROM transacoes AS t
      INNER JOIN categorias AS c ON t.categoria_id = c.id
      WHERE t.usuario_id = $1;`,
    [id]);
  },

  findOne: (field, value)=>{
    return dbConnection.query(`SELECT * FROM transacoes WHERE ${field} = $1;`, [value]);
  },
     
  findByPk: (transactionId, userId)=>{
    return dbConnection.query(`
      SELECT 
        t.id, 
        t.tipo, 
        t.descricao, 
        t.valor, 
        t.data, 
        t.usuario_id, 
        t.categoria_id, 
        c.descricao AS categoria_nome
      FROM transacoes AS t
      INNER JOIN categorias AS c ON t.categoria_id = c.id
      WHERE t.id = $1 AND t.usuario_id = $2;`,
    [transactionId, userId]);
  },

  create: (transactionData, userId)=>{
    const { descricao, valor, data, categoria_id, tipo } = transactionData;

    return dbConnection.query(`
      INSERT INTO transacoes
        (descricao, valor, data, categoria_id, tipo, usuario_id)
      VALUES
        ($1, $2, $3, $4, $5, $6) 
      RETURNING
        id,
        tipo,
        descricao,
        valor,
        to_char(data, 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') AS data,
        usuario_id,
        categoria_id,
        (SELECT descricao FROM categorias WHERE id = $7) AS categoria_nome;
      `, 
    [descricao, valor, data, categoria_id, tipo, userId, categoria_id]);
  },

  update: (transactionData, transactionId, userId)=>{
    const { descricao, valor, data, categoria_id, tipo } = transactionData;

    return dbConnection.query(`
      UPDATE transacoes
      SET 
        descricao = $1, 
        valor = $2, 
        data = $3, 
        categoria_id = $4,
        tipo = $5
      WHERE id = $6 AND usuario_id = $7
      RETURNING *;`,
    [descricao, valor, data, categoria_id, tipo, transactionId, userId]);
  },

  destroy: (transactionId, userId)=>{
    return dbConnection.query(`
      DELETE FROM transacoes 
      WHERE id = $1 AND usuario_id = $2 
      RETURNING *;`,
    [transactionId, userId]);
  }
}

module.exports = transactions;
