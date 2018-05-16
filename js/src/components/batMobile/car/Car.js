import React, {Component} from "react"
import "./Car.css"
import axios from 'axios'
import Speed from "./speed/Speed.js"
import CurrentDate from "../../currentDate/CurrentDate";
import GraphsRight from "./graphsRight/GraphsRight.js";
import RevolutionPerMinute from "./revolutionPerMinute/RevolutionPerMinute";
import CarDate from "./carDate/CarDate";
import CenterPannel from "./centerPannel/CenterPannel";
import {ChangeSpeedButton} from './changeSpeedButton/ChangeSpeedButton.js';
import ChangeTemperatureButtons from "./changeTemperatureButton/ChangeTemperatureButtons";

export default class Car extends Component {

  constructor(props) {
    super(props);
    this.state = {
        sessionId: 0,
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

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        console.log("component will unmount")
    }

    tick(){
        this.fetchCarData()
    }

  componentDidUpdate( prevState, prevProps){
      if(prevProps.sessionId !== this.props.sessionId) {
          this.setState({sessionId: this.props.sessionId})
          this.fetchCarData()
      }
      if(prevState.temperature !== this.state.temperature){
          this.updateTemperatureBDD(this.state.temperature)
      }
      if(prevState.speed !== this.state.speed){
          this.updateSpeedBDD(this.state.speed)
      }
  }

  fetchCarData = () => {

      axios.get("/car/"+ this.props.sessionId)
          .then((results) => {
              this.setState({
                  weight: results.data.weight,
                  speed: results.data.speed,
                  mileage: results.data.mileage,
                  gas: results.data.essence,
                  battery: results.data.battery,
                  tpm: results.data.tpm,
                  oilLevel: results.data.oilLevel,
                  liquidLevel: results.data.liquidLevel,
                  carbodyState: results.data.carbodyState,
                  position: {xPos: results.data.xPos, yPos: results.data.yPos},
                  bpm: results.data.bpm,
                  tireId: results.data.tireId,
                  radioId: results.data.radioId,
                  temperature: results.data.temperature,
                  headlight: results.data.headlight
              })
          })
          .catch((error) => console.log(error))
  }

  changeTemperatureClick = (op) => {
      if(op === "+" && this.state.temperature+1 <= 50) // 50 : temperature max
          this.setState((prevState, props) => ({temperature: prevState.temperature+1}));
      else if (op === "-" && this.state.temperature-1 >= 0)
          this.setState((prevState, props) => ({temperature: prevState.temperature-1}));
  }

  updateTemperatureBDD = (value) => {
      axios.put("/car/"+ this.state.sessionId, {
            temperature: value
        })
      .catch(error => console.log(error))
  }

  updateSpeedBDD = (value) => {
      axios.put("/car/"+ this.state.sessionId, {
          speed: value
      })
          .catch(error => console.log(error))
  }

  changeSpeedClick(op) {

    if(op === "+" && this.state.speed+10 <= this.state.speedMax)
      this.setState((prevState, props) => ({speed: prevState.speed+10}));
    else if (op === "-" && this.state.speed-10 >= 0)
      this.setState((prevState, props) => ({speed: prevState.speed-10}));
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
                <div className="car-date">
                </div>
              </div>
              <div className="col p-5">
                  <GraphsRight speed={this.state.speed} gas={this.state.gas}/>
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
          <div className="row justify-content-center fixed-bottom">
            <CarDate/>
          </div>
          <div className="row justify-content-center">
          <div className="h-50 w-50 container" id="center-pannel">
              <CenterPannel gas={this.state.gas} temperature={this.state.temperature} changeMode={this.props.changeMode}/>
              <ChangeTemperatureButtons changeTemperature={this.changeTemperatureClick}/>
          </div>
          </div>
      </div>
    )
  }
}
