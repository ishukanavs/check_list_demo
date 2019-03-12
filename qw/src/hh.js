import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import del from './del.jpg';
import './hhs.css';
class hh extends Component {
  signOut(e) {
    e.preventDefault()
    if (localStorage.getItem('postData')) {
       localStorage.removeItem('postData');
       this.props.history.push('/login')
      }
     }

      constructor(props){
         super(props);
          this.state = {
          name:'',
          redirect: false,
      };
    }

    componentDidMount() {
       let data = JSON.parse(localStorage.getItem('postData'));
        console.log(data);
        }

  render() {
      if(!localStorage.getItem('postData') || this.state.redirect){
       return (<Redirect to={'/hh'}/>)
  }
    return (

    <div>
    <div class="column ">
    <h3>Nineleaps</h3>
    <p>checklist management</p>
    <button className="logout" onClick="this.signOut">Logout</button>
    
    </div>

    <div class="rowq" >
    <input type="button" className="but" value="+"></input>
    </div>  

    <div class="row1" >
    <img src={del} className="im" alt="Profile" onClick=" "></img>
    </div>

    <div class="row2" >
    <input type="text" value=""></input>
    <input type="button" className="buton" value="search"></input> </div>
    <div class="row3">
    <input type="button" className="butt" value="P"></input></div>
    <input type="button" className="logout" onClick={this.setState.signOut} >SignOut</input>

    <div class="column1 "></div>
    <div class="row4" ></div>
    <div class="column1 "></div>
    <div class="row5"></div>
    <div class="column3 "></div>
    <div class="row6"></div>
   
    
    </div>


    );
  }
}

export default hh;
