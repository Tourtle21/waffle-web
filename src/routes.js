import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);