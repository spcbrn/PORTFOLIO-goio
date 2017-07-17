import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './components/Search/Search';
import IATA from './components/IATA/IATA';


export default(
    <Switch>
        <Route path="/search" component={Search} />
        <Route path="/IATA" component={IATA} />
    </Switch>
)