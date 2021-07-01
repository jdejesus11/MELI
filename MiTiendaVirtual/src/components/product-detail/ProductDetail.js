import React, {PureComponent} from 'react';
import './ProductDetail.scss';
import {setDecimalsMask} from '/src/helpers/currency.js'
import productDetailService from '/src/services/productDetailService';
import BreadCrumb from '/src/components/breadcrumb/BreadCrumb';

class ProductDetail extends PureComponent{

    state = {
        product: undefined, categories:[]
    }

    componentDidMount = async () => {
        let product =   this.props.location &&
                        this.props.location.state &&
                        this.props.location.state.product  ? 
                        this.props.location.state.product  :
                        undefined;
       if (product){
                 let response = await productDetailService(product.id);
                 this.setState({product:response.item, categories:response.categories})
       }               
    }

    render(){
        let {product,categories} =  this.state;
        return (
            <>
            {
                product &&
                <>
                <BreadCrumb categories={categories} />
                <section className="product-detail-container">
                    <div className="flex flex-column flex-vertical-center flex-horizontal-center">
                        <div className="product-detail-image-container">
                            <img 
                                src = {product.picture}
                                alt={product.title ? product.title : "product"} 
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="flex flex-column">
                        <div id="product-detail-info-container" className="flex flex-row">
                            <span id="product-detail-status" className="flex flex-row">
                                {product.condition == 'new' ? "Nuevo" : "Usado"}
                            </span>
                            <span id="product-detail-sold" className='flex flex-row flex-expand'>
                                {`${product.sold_quantity} Vendidos`}
                            </span>
                        </div>
                        <h2 id="product-detail-title" className="flex flex-row">
                            <span>
                            {product.title}
                            </span>
                        </h2>
                        <div className='flex flex-row flex-no-wrap flex-horizontal-center product-detail-price-container'>
                            <span className="flex flex-row product-detail-currency-price">$</span>
                            <span className='flex flex-row product-detail-price'>
                                {product.price.amount}
                            </span>
                            <div className="flex flex-column flex-self-start">
                            <span className="flex product-detail-price-decimals">   
                                {setDecimalsMask(product.price.decimals)}
                            </span>
                            </div>
                        </div>
                        <button id="product-buy-btn" className="flex flex-vertical-center" aria-label="comprar" >
                            <span id="product-buy-btn-text">Comprar</span>
                        </button>
                    </div>
                    <div className="flex flex-column">
                        <h1>Descripcion del producto</h1>
                        <p className="flex product-detail-description">
                        {product.title}
                        </p>
                    </div>
                </section>
                </>
            }
        </>
      )
    }
}

export default ProductDetail;