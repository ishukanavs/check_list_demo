
import React from "react";
import ReactDOM from "react-dom";
import  './hhs.css';
import SideBar from "./sidebar";

export default function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h2 id="q">NINELEAPS</h2>
        <h4 id="w">CHECKLIST MANAGEMENT</h4>
        
      </div>
      <div id ="qf">
       
          
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);