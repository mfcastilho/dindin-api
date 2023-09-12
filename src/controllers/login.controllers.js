const loginService = require('../services/login.services');

const loginController = async (req, res)=>{
  const userLogged = await loginService(req.body);
  return res.status(200).json(userLogged);
}

module.exports = loginController;
