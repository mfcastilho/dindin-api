const { AppError } = require('../errors');
const { transactionsRepository } = require('../repositories/index');

const verifyTransaction = async (req, res, next) => {
  const { id: transactionId } = req.params;
  const { id: userId } = res.locals.decoded;

  const queryResult = await transactionsRepository.findByPk(transactionId, userId);
  const transactionExists = queryResult.rows[0];

  if (!transactionExists) throw new AppError('Transação não encontrada!', 404);

  return next();
}

module.exports = verifyTransaction;
