const categoriesService = require('../services/categories.services');

const categoriesController = {
  categoriesList: async (req, res)=>{
    const categories = await categoriesService.categoriesList();
    return res.status(200).json(categories);
  }
}

module.exports = categoriesController;
