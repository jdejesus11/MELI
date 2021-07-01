import axios from 'axios';
import configServices from '../configs/configServices';

axios.defaults.baseURL = configServices.api_url;

const productDetailService = (productID) => {
    if (productID === undefined || productID === null)
        return;
    let url = `api/items/${productID}`
    return axios.get(url)
            .then(function (response) {
                let data = response ? response.data : {};
                return {
                    ...data,
                    error: false,
                    status: response.status
                }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    error: true,
                    status: error.response ? error.response.status : 500,
                    data: {}
                }
            })
}

export default productDetailService;