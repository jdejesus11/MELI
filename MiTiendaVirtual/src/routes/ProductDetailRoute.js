import React from 'react';
import {Route} from 'react-router-dom'; 
import ProductDetail from '/src/components/product-detail/ProductDetail'

function ProductDetailRoute({match}) {
    return(
        <Route 
            exact
            path={`${match.path}items/:productid`}
            component={ProductDetail}
        />
    )
}

export default ProductDetailRoute;