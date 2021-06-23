import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Success from './Components/Pages/Success';

export default (
    <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/success' component={Success} />
        <Route path='/' component={Home} />
    </Switch>
);