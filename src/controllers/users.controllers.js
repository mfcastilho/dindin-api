const userService = require('../services/users.services');

const userController = {
  userRegister: async (req, res)=>{
    const userRegistered  = await userService.userRegister(req.body);
    return res.status(201).json(userRegistered);
  },

  detailUser: async (req, res)=>{
    const userLogged = await userService.detailUser(res.locals.decoded);
    return res.status(200).json(userLogged);
  },

  editUser: async (req, res)=>{
    await userService.editUser(req.body, res.locals.decoded);
    return res.status(200).json();
  }
}

module.exports = userController;
