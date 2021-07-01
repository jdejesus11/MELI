const categoriesController = require('./categoriesController');
const productsService = require('../services/products');
const metadata = require('../utilities/metadata');
const utilities = require('../utilities/currency');

module.exports = {
    GetProductsByQuery: async function(query){
        let result = { status : 500, data: {}, message:"Algo salio mal..."};

        let response = await productsService.GetProductsByQuery(query);
        if (response && response.status && response.status == 200){
            result.status = response.status;
            result.data = await fromResponseToProducts(response.data.results);
            result.message = "OK";
            return result;
        }

        if (response && response.status){
            result.status = response.status;
            result.message = "Algo salio mal..."
            return result;
        }

        return result;
    },
    GetProductByProductID: async function(productID){
        let result = { status : 500, data: {}, message:"Algo salio mal..."};

        let response = await productsService.GetProductByID(productID);
        if (response && response.status && response.status == 200){
            result.status = response.status;
            result.data = await fromResponseToProductDetail(response.data);
            result.message = "OK";
            return result;
        }

        if (response && response.status){
            result.status = response.status;
            result.message = "Algo salio mal..."
            return result;
        }

        return result;
    }
}

const fromResponseToProducts = async function(products){
    if (!products)
        return {};

    let categories = await categoriesController.GetCategoriesByProducts(products);
    let updatedProducts = products.map(item => {return fromProductToItem(item)});

    return {
        author: metadata.author,
        categories:categories.map(item => item.name),
        items:updatedProducts,
    }
}

const fromResponseToProductDetail = async function(product){
    if (!product)
        return {};

    let categories = await categoriesController.GetCategoriesByProducts([product]);
    return {
        author:metadata.author,
        categories:categories.map(item => item.name),
        item:fromProductToItem(product),
    }
}

const fromProductToItem = function(product){
    if (!product)
        return {};

    let price = utilities.getDecimalFromPrice(String(product.price));
    return  {
        id:product.id,
        title:product.title,
        price:{
            currency:product.currency_id,
            amount:Number(price[0]),
            decimals:Number(price[1])
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        available_quantity: product.available_quantity,
        sold_quantity: product.sold_quantity,
        location: product.address && product.address.state_name ? product.address.state_name  : "N/A"
    }
}