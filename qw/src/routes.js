import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import hh from './hh';
import NotFound from './NotFound';


const Routes = () => (
<BrowserRouter>
    <Switch>
    <Route exact to path="/" component={Welcome}/>
    <Route path="/hh" component={hh}/>
    <Route path="*" component={NotFound}/>
   </Switch>
</BrowserRouter>
);
export default Routes;