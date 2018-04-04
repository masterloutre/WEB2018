import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js'
import { Bar } from '@nivo/bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Home/> //call the component Home
        /*<Bar
          width={1000}
          height={600}
          data={[
            {name:'batman', value:54},
            {name:'the joker', value:100}
          ]}
          indexBy="name"
          keys={["batman", "the joker"]}
          padding={0.2}
          labelTextColor="inherit:darker(1.4)"
          labelSkipWidth={16}
          labelSkipHeight={16}
        />/*
      </div>
    );
  }
}

export default App;
