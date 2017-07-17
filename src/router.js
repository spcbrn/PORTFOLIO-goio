import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';
import IATA from './components/IATA/IATA';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Tech from './components/Tech/Tech';


 
export default(
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/IATA" component={IATA} />
        <Route path="/disclaimer" component={Disclaimer}/>
        <Route path="/tech" component={Tech}/>
    </Switch>
)