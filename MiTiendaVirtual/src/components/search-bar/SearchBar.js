import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';
import './SearchBar.scss'
import MagnifyingGlassIcon  from '/src/components/icons/MagnifyingGlassIcon';
import MelIcon  from '/src/components/icons/MelIcon';

class SearchBar extends Component {

    constructor(props){
        super(props);
    }

    inputRef = React.createRef('');

    componentDidMount(){
        this.configureOperatibility();
        this.configureAccesbility();
    }

    componentDidUpdate(){
        this.configureAccesbility();
    }

    configureOperatibility = () => {
        this.inputRef.current.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById('search-button').click();
            }
        });
    }

    configureAccesbility = () => {
        this.inputRef.current.focus();
    }

    search = () => {
        let value = this.inputRef.current.value;
        this.props.setQuery(value);
    }

    render(){
        return(
            <section 
                id="search-container" 
                className="flex flex-row flex-horizontal-center safety-wrapper">
                  <Link 
                    to={{ pathname:`/`}} 
                 >
                    <MelIcon 
                        arial-label="logo"
                        style={{ 
                        width:'3.5rem', 
                        heigth:'3.5rem' ,
                        marginRight:'.8rem'
                        }}
                    />
                </Link>
                <div 
                    id="input-container" 
                    className="flex flex-row">
                    <input 
                        type='text'
                        id='search-input'
                        placeholder={"Buscar productos, marcas y mas..."}
                        ref={this.inputRef}
                        aria-label="barra de busqueda"
                        name="search-input"
                    />
                    <button
                        aria-label="boton de buscador"
                        id="search-button"
                        className="flex flex-column flex-vertical-center"
                        onClick={this.search}
                    >
                        <MagnifyingGlassIcon 
                            style={{ width:'.9rem', heigth:'.9rem' }}
                        />
                    </button>
                </div>
            </section>
        )
    }
}

export default SearchBar;