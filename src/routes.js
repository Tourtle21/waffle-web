import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';

export default (
    <Switch>
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Home} />
    </Switch>
);