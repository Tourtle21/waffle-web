import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';

export default (
    <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Home} />
    </Switch>
);