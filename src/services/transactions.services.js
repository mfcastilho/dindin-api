const { AppError } = require('../errors');
const { transactionsRepository, categoriesRepository } = require('../repositories/index');

const createTransactionService = async (payload, userId) => {
  const insertTransactionResult = await transactionsRepository.create(payload, userId);
  const newTransaction = insertTransactionResult.rows[0];

  return newTransaction;
}

const listTransactionsService = async (userId, queryFilter) => {
  if (Array.isArray(queryFilter)){
    const filters = queryFilter.map(filter => {
      return filter.toLowerCase().charAt(0).toUpperCase() + filter.slice(1);
    });

    const { rows: listTransactionResult } = await transactionsRepository.findAllByPk(userId);
    const { rows: categoriesList } = await categoriesRepository.findAll();
    const getCategoryFilter = categoriesList.filter(category => filters.includes(category.descricao));

    const listTransactionsByCategory = listTransactionResult.filter(transaction => {
      return getCategoryFilter.some(category => category.id === transaction.categoria_id);
    });
      
    return listTransactionsByCategory;
  }

  const listTransactionResult = await transactionsRepository.findAllByPk(userId);
  const transactions = listTransactionResult.rows;

  return transactions;
}

const listTransactionByIdService = async (transactionId, userId) => {
  const transactionResult = await transactionsRepository.findByPk(transactionId, userId);
  const transactions = transactionResult.rows[0];

  return transactions;
}

const updateTransactionService = async (payload, transactionId, userId) => {
  await transactionsRepository.update(payload, transactionId, userId);
}

const deleteTransactionService = async (transactionId, userId) => {
  await transactionsRepository.destroy(transactionId, userId);
}

const extractTransactionsService = async (userId) => { 
  const transactions = await listTransactionsService(userId);

  let sumEntry = 0;
  let sumExit = 0;

  for (const extract of transactions) {
    if (extract.tipo === 'entrada') {
      sumEntry += extract.valor;
    } else if (extract.tipo === 'saida') {
      sumExit += extract.valor;
    }
  }

  const sum = {
    entrada: sumEntry,
    saida: sumExit
  };

  return sum;
}


module.exports = { 
  createTransactionService,
  listTransactionsService,
  listTransactionByIdService,
  updateTransactionService,
  deleteTransactionService,
  extractTransactionsService
}
