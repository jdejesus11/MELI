const axios = require('axios').default;

module.exports = {
    GetCategoryByID:async function(categoryID){
        if (!categoryID)
            return;
    
        let base = process.env.MELI_URL;
        let url = `${base}/categories/${categoryID}`;
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


