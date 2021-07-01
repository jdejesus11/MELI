import React from 'react';
import { Route } from 'react-router-dom';
import Products from '/src/components/products/Products';

function ProductsRoute({ match }) {
    return (
        <Route
            exact
            path={`${match.path}items`}
            component={Products}
        />
    )
}

export default ProductsRoute;