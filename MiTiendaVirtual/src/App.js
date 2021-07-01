import React from 'react';
import './styles/main.scss'
import {Switch} from 'react-router-dom';
import FeedRoute from '/src/routes/FeedRoute';

export default class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <FeedRoute />
        )
    }
}
