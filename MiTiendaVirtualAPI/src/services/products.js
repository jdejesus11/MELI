const axios = require('axios').default;
let base = process.env.MELI_URL;

module.exports = {
    GetProductsByQuery: async function (query){
        if (!query)
            return;
    
        let site = process.env.SITE;
        let url = `${base}/sites/${site}/search?q=${query}`;
    
        return axios.get(url)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        if (error && error.response)
                            return error.response;
                            
                        return;
                    })
    },
    GetProductByID: async function (productID){
        if (!productID)
            return;

        let url = `${base}/items/${productID}`;
    
        return axios.get(url)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        if (error && error.response)
                            return error.response;

                        return;
                    })
    }
}



