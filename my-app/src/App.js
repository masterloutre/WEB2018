import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './js/components/home/Home.js'
//import { Bar } from '@nivo/bar'

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
/*        <Bar
          width={1000}
          height={600}
          margin={{top: {60}, right: {80}, bottom: {60}, left: {80}}
          data={[{{country: "AD", hotdogs: {116}, hotdogsColor: "hsl(146, 70%, 50%)", …}},
                 {{country: "AE", hotdogs: {115}, hotdogsColor: "hsl(123, 70%, 50%)", …}},
                 {{country: "AF", hot dogs: {194}, hot dogsColor: "hsl(214, 70%, 50%)", …}},
                 {{country: "AG", hot dogs: {123}, hot dogsColor: "hsl(322, 70%, 50%)", …}},
                 {{country: "AI", hot dogs: {181}, hot dogsColor: "hsl(73, 70%, 50%)", …}},
                 {{country: "AL", hot dogs: {105}, hot dogsColor: "hsl(2, 70%, 50%)", …}},
                 {{country: "AM", hot dogs: {73}, hot dogsColor: "hsl(214, 70%, 50%)", …}}]}
          indexBy="country"
          keys={["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"]}
          padding={0.4}
          labelTextColor="inherit:darker(1.4)"
          labelSkipWidth={16}
          labelSkipHeight={16}
          markers={[{{axis: "y", value: {300}, lineStyle: {{stroke: "rgba(0, 0, 0, .35)", strokeWidth: {2}}}, …}}]}
        />
*/
        <Home/> //call the component Home
      </div>
    );
  }
}

export default App;
