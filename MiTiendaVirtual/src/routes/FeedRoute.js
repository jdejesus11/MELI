import React from 'react';
import Feed from '/src/containers/feed/Feed';
import { Route, Switch } from 'react-router-dom';


function FeedRoute(){
    return(
            <Switch>
                <Route 
                    path="/"
                    component={Feed}
                />
            </Switch>
    )
}

export default FeedRoute;