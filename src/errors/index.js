const pkg = require('jsonwebtoken');

class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = async (error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json(
      { mensagem: error.message }
    );
  }

  const { JsonWebTokenError } = pkg;
  
  if (error instanceof JsonWebTokenError) {
    return res.status(401).json(
      { mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' }
    );
  }

  console.error(error);

  return res.status(500).json(
    { mensagem: 'Internal Server Error.' }
  );
};

module.exports = { AppError, errorHandler };
