const { AppError } = require('../errors');
const { categoriesRepository } = require('../repositories/index');

const verifyCategory = async (req, res, next) => {
  const { categoria_id } = req.body;

  const queryResult = await categoriesRepository.findByPk(categoria_id);
  const categoryExists = queryResult.rows[0];

  if (!categoryExists) throw new AppError('Categoria não encontrada!', 404);

  return next();
}

module.exports = verifyCategory;
