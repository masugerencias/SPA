import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import MainComponent from "./components/Main";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    
   
        <MainComponent />
    
</div>
</BrowserRouter>
  )
}

export default App;
