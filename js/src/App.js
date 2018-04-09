import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js'
import axios from 'axios';
import baseURL from './config.js';
axios.defaults.baseURL = baseURL;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the BatMobile</h1>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
