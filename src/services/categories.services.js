const categoriesRepository = require('../repositories/categories.repository');

const categoriesService = {
  categoriesList: async ()=>{
    const { rows: categories } = await categoriesRepository.findAll();
    return categories
  }
}

module.exports = categoriesService;
