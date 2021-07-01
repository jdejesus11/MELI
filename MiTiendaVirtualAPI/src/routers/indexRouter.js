
var productsController = require('../controllers/productsController.js');
var constants = require('../utilities/constants.js');

module.exports = {
        productDetail: async ( req, res ) => {
            let productId = req.params.id;
            if (productId === undefined || productId === null |  productId.trim() === "")
                return res.status(400).send({message:constants.PRODUCT_ID_SEARCH_EMPTY});
        
             let response = await productsController.GetProductByProductID(productId);
             if (response)
                return res.status(response.status).send(response.data);
        
             return res.status(500).send(response.message);
        },
        products: async ( req, res ) => {
            let query = req.query.q;
            if (query === undefined || query === null || (query.trim() === "")){
                return res.status(400).send({message:constants.QUERY_SEARCH_EMPTY,type:""});
            }
        
             let response = await productsController.GetProductsByQuery(query);
             if (response)
                return res.status(response.status).send(response.data);
        
             return res.status(500).send(response.message);
        }
}