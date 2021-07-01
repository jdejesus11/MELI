import axios from 'axios';
import configServices from '../configs/configServices';

axios.defaults.baseURL = configServices.api_url;

const productsService = (query) => {
    if (query === undefined || query === null) 
        return;

    let url = `api/items?q=${query}`;
    return axios.get(url, 
            {
                headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                let data = response ? response.data : {};
                return {
                    ...data,
                    error:false,
                    status:response.status
                 }
            })
            .catch(function (error) {
                 console.log(error);
                 return {
                     error: true,
                     status: error.response ? error.response.status : 500,
                     data:{}
                 }
            })

}

export default productsService;