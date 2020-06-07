import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App(props) {

  // let user = {name:"Rameez", age:22}; //This is called Structure
  // let {name, age} = user; //This is called deStructure
  // this custom hello tag in line no 14 extracts the value from Hello.js file & Reandering properly
  return <div>
            Hello World from App.JS and {props.name} Age is {props.age}
            <br/>
            <Hello/>
        </div>

    

}

export default App;
