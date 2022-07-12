import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sampleform from './Sampleform'
import ReactDOM from "react-dom"


class App extends React.Component
{
 
  render(){
    return(
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Sampleform/> }exact>
            </Route>
          </Routes>
        </Router>
      </React.Fragment>
    );
}
}

export default App;
