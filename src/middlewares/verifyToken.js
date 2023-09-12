const { AppError } = require('../errors');
const { verify } = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) throw new AppError('Para acessar este recurso um token de autenticação válido deve ser enviado.', 401);

  const token = auth.split(' ')[1];

  const decoded = verify(token, process.env.SECRET_KEY);

  res.locals.decoded = decoded;

  return next();
};

module.exports = verifyToken;
