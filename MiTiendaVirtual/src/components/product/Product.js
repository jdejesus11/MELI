import React, { Component, PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { setDecimalsMask } from '/src/helpers/currency.js'
import './Product.scss';


class Product extends Component {

    linkToProductDetail = () => {
        let product = this.props.product;
        if (!product)
            return;

        const location = {
            pathname: `/items/:id`,
            search: `?search=${product.id}`,
            state: { product }
        }
        this.props.history.push(location)
    }

    render() {
        let product = this.props.product;
        return (
            <>
                {
                    product &&
                    <li className={"product-container"}>
                        {
                            product.picture &&
                            <Link
                                rel="product image"
                                aria-label="Product Image"
                                to={{
                                    pathname: `/items/${product.id}`,
                                    state: { product }
                                }} >
                                <img
                                    className={"product-container_padding"}
                                    src={product.picture}
                                    alt={product.title ? product.title : "product"}
                                    width="120px"
                                    height="120px" />
                            </Link>
                        }
                        <article className="flex flex-column flex-expand product-info product-container_padding">
                            <header className='flex flex-column product-info-header'>
                                <div className='flex flex-row flex-no-wrap product-price-container'>
                                    <span className="flex flex-row product-currency-price ">$</span>
                                    <span className='flex flex-row flex-expand product-price '>{
                                        String(product.price.amount) + "." +
                                        setDecimalsMask(product.price.decimals)}</span>
                                </div>
                            </header>
                            <span className="flex product-location">
                                {
                                    product.location
                                }
                            </span>
                            <p className='product-description'>
                                <Link
                                    rel="product description"
                                    aria-label="Product description"
                                    to={{
                                        pathname: `/items/${product.id}`,
                                        state: { product }
                                    }} >
                                    {product.title}
                                </Link>
                            </p>
                        </article> 
                    </li> 
                }
            </>
        )
    }
}

export default Product;