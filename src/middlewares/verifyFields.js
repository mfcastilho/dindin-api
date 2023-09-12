const { AppError } = require('../errors');

const verifyFields = async (req, res, next)=> {
  if (req.baseUrl === '/login') {
    const { email, senha } = req.body;

    if (!email || !senha) throw new AppError('Todos os campos obrigatórios devem ser informados.', 400);

    return next();
  }

  if (req.baseUrl === '/usuario'){
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) throw new AppError('Todos os campos obrigatórios devem ser informados.', 400);

    return next();
  }

  if (req.baseUrl === '/transacao'){
    const { descricao, valor, data, categoria_id, tipo } = req.body;

    if (!descricao || !valor || !data || !categoria_id || !tipo) throw new AppError('Todos os campos obrigatórios devem ser informados.', 400);

    if (tipo !== 'entrada' && tipo !== 'saida') throw new AppError('O tipo deve ser entrada ou saida', 400);

    return next();
  }
}

module.exports = verifyFields;
