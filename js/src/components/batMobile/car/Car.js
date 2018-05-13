import React, {Component} from "react"
import "./Car.css"
import axios from 'axios'
import Speed from "./speed/Speed.js"
import CurrentDate from "../../currentDate/CurrentDate";
import Graphs from "./graphs/Graphs";
import RevolutionPerMinute from "./revolutionPerMinute/RevolutionPerMinute";
import CarDate from "./carDate/CarDate";
import CenterPannel from "./centerPannel/CenterPannel";
import {ChangeSpeedButton} from './changeSpeedButton/ChangeSpeedButton.js';
import ChangeTemperatureButtons from "./changeTemperatureButton/ChangeTemperatureButtons";

export default class Car extends Component {

  constructor() {
    super();
    this.state = {
      weight: 0,
      speed: 0,
      speedMax: 350,
      mileage: 0,
      gas: 0,
      battery: 0,
      tpm: 0,
      oilLevel: 0,
      liquidLevel: 0,
      carbodyState: 0,
      position: {xPos: 0, yPos: 0},
      bpm: 0,
      tireId: 0,
      radioId: 0,
      temperature: 0,
      headlight: 0
    };
  }

  componentDidMount(){
     axios.get("/car")
    .then((results) => {
      this.setState({
        weight: results.data[0].weight,
        speed: results.data[0].speed,
        mileage: results.data[0].mileage,
        gas: results.data[0].essence,
        battery: results.data[0].battery,
        tpm: results.data[0].tpm,
        oilLevel: results.data[0].oilLevel,
        liquidLevel: results.data[0].liquidLevel,
        carbodyState: results.data[0].carbodyState,
        position: {xPos: results.data[0].xPos, yPos: results.data[0].yPos},
        bpm: results.data[0].bpm,
        tireId: results.data[0].tireId,
        radioId: results.data[0].radioId,
        temperature: results.data[0].temperature,
        headlight: results.data[0].headlight
      }, () => {
      //  console.log(this.state);
      })
    });
  }

  changeTemperatureClick = (op) => {
      if(op === "+" && this.state.temperature+1 <= 50) // 50 : temperature max
          this.setState((prevState, props) => ({temperature: prevState.temperature+1}));
      else if (op === "-" && this.state.temperature-1 >= 0)
          this.setState((prevState, props) => ({temperature: prevState.temperature-1}));
  }

  changeSpeedClick(op) {
    if(op === "+" && this.state.speed+10 <= this.state.speedMax)
      this.setState((prevState, props) => ({speed: prevState.speed+10}));
    else if (op === "-" && this.state.speed-10 >= 0)
      this.setState((prevState, props) => ({speed: prevState.speed-10}));

    axios.post('/car/speed', { speed: this.state.speed })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  renderSpeedButton = (op) => {
    return (
      <ChangeSpeedButton
        value={op}
        onClick={() => this.changeSpeedClick(op)}
      />
    );
  }

  render(){
    return (
      <div className="car container-fluid w-100 h-100">
          <div className="row" id="top-pannels">
              <div className="col p-5">
                  <CarDate/>
              </div>
              <div className="col p-5">
                  <Graphs speed={this.state.speed} gas={this.state.gas}/>
              </div>
          </div>
          <div className="row align-items-end p-5 justify-content-center" id="circles">
              <div className="col-md-5 col-lg-5 col-12 ">
                  <Speed speed={this.state.speed} speedMax={this.state.speedMax} renderSpeedButton ={this.renderSpeedButton}/>
              </div>
              <div className="col-md-5 col-lg-5 col-12 offset-2">
                  <RevolutionPerMinute speed={this.state.speed}/>
              </div>
          </div>
          <div className="row justify-content-center">
          <div className="h-50 w-50 container" id="center-pannel">
              <CenterPannel gas={this.state.gas} temperature={this.state.temperature}/>
              <ChangeTemperatureButtons changeTemperature={this.changeTemperatureClick}/>
          </div>
          </div>
      </div>
    )
  }
}
