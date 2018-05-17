import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BatMobile from './components/batMobile/BatMobile.js'
import axios from 'axios';
import baseURL from './config.js';
import SvgFilters from "./components/svgFilters/SvgFilters";
axios.defaults.baseURL = baseURL;


class App extends Component {

    constructor(){
        super()
        this.state = {
            sessionId : -1
        }
    }

    componentDidMount() {
        axios.get("/car")
            .then((result) =>
            {
                this.setState({sessionId : result.data.sessionId})
            })
            .catch(error => console.log(error))

    }

  render() {
    return (
      <div className="app container-fluid h-100">
        <BatMobile sessionId={this.state.sessionId}/>
        <SvgFilters/>
      </div>
    );
  }
}

export default App;

