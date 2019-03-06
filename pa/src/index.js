
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SideBar from "./sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1 id="q">NINELEAPS</h1>
        <h2 id="w">CHECKLIST MANAGEMENT</h2>
        
      </div>
      <div id ="qf">
     
          
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
