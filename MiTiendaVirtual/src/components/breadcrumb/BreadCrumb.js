import React, {PureComponent} from 'react';
import './BreadCrumb.scss'

class BreadCrumb extends PureComponent {

    sortCategoryesByAppearances = () => {
        let appearances = {}
        let categories = this.props.categories || [];
  
        categories.forEach(element => {
            if (appearances[element])
                appearances[element]++
            else
                appearances[element] = 1;
        })

        var orderedCategories = Object.keys(appearances).map(function(key) {
            return [key, appearances[key]];
        });

        orderedCategories.sort(function(first, second) {
            return second[1] - first[1];
        });

        return orderedCategories.map(item => item[0]);
    }

    render(){
        let categories = this.sortCategoryesByAppearances();

        return(
            <>
            {
                categories &&
                <section className="flex flex-wrap categories-container">
                    {
                        categories.map((category, index) => (
                            <span className="category" key={index}>{category}</span>
                        ))
                    }
                </section>
            }
            </>
        )
    }
}

export default BreadCrumb;