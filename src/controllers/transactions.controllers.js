const { 
  createTransactionService, 
  listTransactionsService,
  listTransactionByIdService, 
  updateTransactionService,
  deleteTransactionService,
  extractTransactionsService
} = require('../services');

const createTransactionController = async (req, res) => {
  const { id: userId } = res.locals.decoded;
  const create = await createTransactionService(req.body, userId);
  return res.status(201).json(create);
}

const listTransactionController = async (req, res) => {
  const { id: userId } = res.locals.decoded;
  const { filtro } = req.query;
  const list = await listTransactionsService(userId, filtro);
  return res.status(200).json(list);
}

const listTransactionByIdController = async (req, res) => {
  const { id: transactionId } = req.params;
  const { id: userId } = res.locals.decoded;
  const list = await listTransactionByIdService(transactionId, userId);
  return res.status(200).json(list);
}

const updateTransactionController = async (req, res) => {
  const { id: userId } = res.locals.decoded;
  const { id: transactionId } = req.params;
  await updateTransactionService(req.body, transactionId, userId);
  return res.status(204).json();
}

const deleteTransactionController = async (req, res) => {
  const { id: userId } = res.locals.decoded;
  const { id: transactionId } = req.params;
  await deleteTransactionService(transactionId, userId);
  return res.status(204).json();
}

const extractTransactionController = async (req, res) => {
  const { id: userId } = res.locals.decoded;
  const extract = await extractTransactionsService(userId);
  return res.status(200).json(extract);
}

module.exports = {
  createTransactionController,
  listTransactionController,
  listTransactionByIdController,
  updateTransactionController,
  deleteTransactionController,
  extractTransactionController
}
