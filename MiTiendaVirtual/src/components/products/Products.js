import React, {Component} from 'react';
import Product from '/src/components/product/Product';
import BreadCrumb from '/src/components/breadcrumb/BreadCrumb';
import {getValuesFromQueryString} from '/src/helpers/strings'
import productsService from '/src/services/productsService';
import './Products.scss';

class Products extends Component{

    state = { products:[], categories:[] }

    componentDidMount = async () => {
        let wasSendByLocation =     this.props.location &&
                                    this.props.location.state &&
                                    this.props.location.state.products &&
                                    this.props.location.state.categories
                                    ? 
                                    true :
                                    false;
        if (!wasSendByLocation){
             let query = getValuesFromQueryString(this.props.location.search);
             if (query){
                 let response = await this.searchProducts(query);
                 this.setState({products:response.items, categories:response.categories})
             }
        }                
    }

    searchProducts = async (query) => {
        let response = await productsService(query);
        if (response)
            return response;
        
        return []
    }

    render(){ 
       let products = this.props.location &&
                       this.props.location.state ?
                       this.props.location.state.products  :
                       this.state.products;

       let categories = this.props.location &&
                       this.props.location.state ?
                       this.props.location.state.categories  :
                       this.state.categories;
    
        return(
            <>
            <BreadCrumb categories={categories} />
            <section className="flex flex-column flex-expand">
                {
                    products && 
                    <ol className="products-list-container"> 
                    {
                    products.map((item,key) => (
                    <Product  
                            history = {this.props.history}
                            key={key} 
                            product={item}        
                    />
                    ))
                    }
                    </ol>
                }
            </section>
            </>
        )
    }
}

export default Products;