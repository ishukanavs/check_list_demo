
import React from "react";
import ReactDOM from "react-dom";
import {Button} from 'reactstrap';
import "./styles.css";
import SideBar from "./sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1 id="q">NINELEAPS</h1>
        <h2 id="w">CHECKLIST MANAGEMENT</h2>
        
      </div>
      <div className="main">
      <br/><br/>
      <button className="btn"><i class="fa fa-trash"></i></button>
      <button className="btn"><i class="fa fa-download"></i></button>
      <br/>
      </div>


      <div className="dec">
      <div className="row">
      <div className="column">
      <div className="card">
      <h3>Checklist 1</h3>
      <p> 1</p>
      <p>2</p>
      </div>
      </div>
  

      <div class="column">
      <div class="card">
      <h3>Checklist 2</h3>
      <p> 1</p>
      <p>2</p>
      </div>
      </div>
  
      <div class="column">
      <div class="card">
      <h3>Checklist 3</h3>
      <p> 1</p>
      <p>2</p>
      </div>
      </div>
  
      <div class="column">
      <div class="card">
      <h3>Checklist 4</h3>
      <p> 1</p>
      <p>2</p>
      </div>
      </div>
      </div>
      <br/><br/>
 
      </div>
      </div> 
  

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
