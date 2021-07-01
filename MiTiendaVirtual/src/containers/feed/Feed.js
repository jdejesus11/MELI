import React, { Component } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import { GENERAL_SERVER_ERROR, NO_RESULT_FOUND, EMPTY_SEARCH_PARAMETER } from '/src/constants/constantsServices';
import productsService from '/src/services/productsService';
import ProductsRoute from '/src/routes/ProductsRoute';
import ProductDetailRoute from '/src/routes/ProductDetailRoute';
import NoResultMessage from '../../components/no-result-message/NoResultMessage';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import './Feed.scss'

const SHOW_NO_RESULT = "no-result";
const SHOW_INVALID_PARAMETERS_RESULT = "invalid-params-result";
const SHOW_ERROR_RESULT = "error-result";

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSpinnerVisible: false,
            isMessageVisible: false,
            message: "",
            messageType: 0
        }
    }

    debouncedSetQuery = _.debounce((query) => {
        this.setState({ query }, async () => {
            let response = await this.searchProducts(query);
            
            if  (response &&
                response.status === 200 && 
                response.items.length == 0){
                    this.setNoResultVisibility(true);
                return;
            }

            if  (response && 
                (response.status >= 400 && response.status < 500)){
                    this.setEmptyParametersVisibility(true);
                return;
            }

            if  (response && 
                (response.status >= 500)){
                    this.setErrorVisibility(true);
                return;
            }

            this.setNoResultVisibility(false);
            this.setErrorVisibility(false);

            const location = {
                pathname: `/items`,
                search: `?search=${query}`,
                state: { products: response.items, categories: response.categories }
            }
            this.props.history.push(location)
        })
    }, 2000, {
        'leading': true,
        'trailing': true,
        'maxWait': 3000
    })

    setQuery = (query) => {
        this.debouncedSetQuery(query);
    }

    setSpinnerVisibility = (isSpinnerVisible) => {
        this.setState({
            isSpinnerVisible,
            isMessageVisible: false
        })
    }

    setNoResultVisibility = (isMessageVisible) => {
        this.setState({ 
            isMessageVisible, 
            message: isMessageVisible ? NO_RESULT_FOUND  : "",
            messageType : isMessageVisible ? SHOW_NO_RESULT : "",
            isSpinnerVisible: false
        });
    }

    setEmptyParametersVisibility = (isMessageVisible) => {
        this.setState({ 
            isMessageVisible, 
            message: isMessageVisible ? EMPTY_SEARCH_PARAMETER  : "",
            messageType : isMessageVisible ? SHOW_INVALID_PARAMETERS_RESULT : "",
            isSpinnerVisible: false
        });
    }

    setErrorVisibility = (isMessageVisible) => {
        this.setState({ 
            isMessageVisible, 
            message: isMessageVisible ? GENERAL_SERVER_ERROR  : "",
            messageType : isMessageVisible ? SHOW_ERROR_RESULT : "",
            isSpinnerVisible: false
        });
    }

    searchProducts = async (query) => {
        this.setSpinnerVisibility(true);
        let response = await productsService(query);
        this.setSpinnerVisibility(false);
        if (response) return response;
        return [];
    }

    render() {
        let { isMessageVisible, messageType, isSpinnerVisible, message } = this.state;
        return (
            <>
                <header className="flex flex-vertical-center flex-no-shrink feed-header">
                    <SearchBar setQuery={this.setQuery}
                />
                </header>
                <main className="flex flex-column flex-horizontal-center flex-expand feed-body" >
                    {
                        isMessageVisible &&
                        !isSpinnerVisible &&
                        messageType === SHOW_NO_RESULT &&
                        <NoResultMessage 
                            message={message} 
                        />
                    }
                    {
                        isMessageVisible &&
                        !isSpinnerVisible &&
                        messageType === SHOW_INVALID_PARAMETERS_RESULT &&
                        <NoResultMessage 
                            message={message} 
                        />
                    }
                    {
                        isMessageVisible &&
                        !isSpinnerVisible &&
                        messageType === SHOW_ERROR_RESULT &&
                        <ErrorMessage 
                            message={message} 
                        />
                    }
                    {
                        !isMessageVisible &&
                        !isSpinnerVisible &&
                        <section  className="flex flex-column flex-expand safety-wrapper feed-body__routes">
                            <ProductsRoute {...this.props} />
                            <ProductDetailRoute {...this.props} />
                        </section>
                    }
                    {
                        isSpinnerVisible &&
                        !isMessageVisible &&
                        <LoadingSpinner message="Buscando los mejores resultados..." />
                    }

                </main>
                <footer className="flex flex-no-shrink feed-footer">
                    <span className="flex flex-expand flex-vertical-center feed-footer_text" arial-label="autor" >
                        <em>JUAN CARLOS DE JESUS.</em> &nbsp; 2021. &copy; &nbsp; 
                    </span>
                </footer>
            </>
        )
    }
}

export default Feed;