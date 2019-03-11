import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
import h from './hh.js';

class Home extends Component {

constructor(props){
    super(props);
    this.state = {
       name:'',
       redirect: false,
   };
}

componentDidMount() {
     let data = JSON.parse(sessionStorage.getItem('userData'));
     console.log(data);
     this.setState({name: data.userData.name} )
}

render() {

if(!sessionStorage.getItem('userData') || this.state.redirect){
    return (<Redirect to={h}/>)
}

return (
<div >
Welcome {this.state.name}
console.log(this.data)
</div>
);
}
}
export default Home;