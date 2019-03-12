import React, { Component } from 'react';
import './App.css'
import Routes from './routes';
class App extends Component {

constructor(){
super();
    this.state={
    appName: "Login with Facebook and Google using ReactJS and RESTful APIs",
}
}
render() {
return (
<div className="t1">

 <Routes name={this.state.appName}/>


</div>

);
}
}
export default App;