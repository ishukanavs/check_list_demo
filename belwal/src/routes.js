import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import h from './hh.js';
// import NotFound from './NotFound';


const Routes = () => (
<BrowserRouter>
    <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path='/hh' component={h}/>
    {/* <Route path="*" component={NotFound}/> */}
   </Switch>
</BrowserRouter>
);
export default Routes;