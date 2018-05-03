import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BatMobile from './components/batMobile/BatMobile.js'
import axios from 'axios';
import baseURL from './config.js';
axios.defaults.baseURL = baseURL;

class App extends Component {
  render() {
    return (
      <div className="app container-fluid h-100">
        <BatMobile/>
      </div>
    );
  }
}

export default App;
