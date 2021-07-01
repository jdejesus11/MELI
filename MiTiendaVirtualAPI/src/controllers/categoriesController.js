
const categoriesService = require('../services/categories');

module.exports = {
    GetCategoriesByProducts: async function(products){
        let categories = [];
        for (let product of products){
            let categoryIndex = categories.findIndex(item => item.id === product.category_id);
            if (categoryIndex === -1){            
                let categoryResponse = await categoriesService.GetCategoryByID(product.category_id);
                if (categoryResponse && categoryResponse.status === 200) {
                    categories.push({
                        id:categoryResponse.data.id,
                        name:categoryResponse.data.name
                    });
                }
            }

        }
        return categories;
    }
}