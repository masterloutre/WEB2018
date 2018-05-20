import React, {Component} from "react"
import "./Car.css"
import axios from 'axios'
import Speed from "./speed/Speed.js"
import GraphsRight from "./graphsRight/GraphsRight.js";
import GraphsLeft from "./graphsLeft/GraphsLeft.js";
import RevolutionPerMinute from "./revolutionPerMinute/RevolutionPerMinute";
import CarDate from "./carDate/CarDate";
import CenterPannel from "./centerPannel/CenterPannel";
import {ChangeSpeedButton} from './changeSpeedButton/ChangeSpeedButton.js';
import ChangeTemperatureButtons from "./changeTemperatureButton/ChangeTemperatureButtons";

export default class Car extends Component {

  constructor(props) {
    super(props);
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
    if(this.props.sessionId !== -1){
        this.fetchCarDataInit()
    }
  }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            3000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.fetchCarDataAuto()
    }

  componentDidUpdate( prevProps, prevState){
      if(prevProps.sessionId !== this.props.sessionId) {
          this.fetchCarDataInit()
      }
  }

  fetchCarDataInit = () => { //fetch all the data form the server
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

    fetchCarDataAuto = () => { //fetch only the data updated automatically server side
        axios.get("/car/"+ this.props.sessionId)
            .then((results) => {
                this.setState({
                    mileage: results.data.mileage,
                    gas: results.data.essence,
                    battery: results.data.battery,
                    oilLevel: results.data.oilLevel,
                    liquidLevel: results.data.liquidLevel,
                    carbodyState: results.data.carbodyState,
                    position: {xPos: results.data.xPos, yPos: results.data.yPos},
                    bpm: results.data.bpm,
                    tireId: results.data.tireId,
                    radioId: results.data.radioId,
                })
            })
            .catch((error) => console.log(error))
    }


  changeTemperatureClick = (op) => {
      if(op === "+" && this.state.temperature+1 <= 50) // 50 : temperature max
          this.setState((prevState, props) => ({temperature: prevState.temperature+1}), () => this.updateTemperatureBDD());
      else if (op === "-" && this.state.temperature-1 >= 0)
          this.setState((prevState, props) => ({temperature: prevState.temperature-1}), () => this.updateTemperatureBDD());
  }

  updateTemperatureBDD = () => {
      axios.put("/car/"+ this.props.sessionId, {
            temperature: this.state.temperature
        })
      .catch(error => console.log(error))
  }

  updateSpeedBDD = () => {
      axios.put("/car/"+ this.props.sessionId, {
          speed: this.state.speed
      })
          .catch(error => console.log(error))
  }

  changeSpeedClick(op) {

    if(op === "+" && this.state.speed+10 <= this.state.speedMax)
      this.setState((prevState, props) => ({speed: prevState.speed+10}), () => this.updateSpeedBDD());
    else if (op === "-" && this.state.speed-10 >= 0)
      this.setState((prevState, props) => ({speed: prevState.speed-10}), () => this.updateSpeedBDD());
    else if (op === "-" && this.state.speed-10 < 0)
      this.setState({speed: 0}, () => this.updateSpeedBDD());
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
              <div className="col p-3">
                <GraphsLeft oilLevel={this.state.oilLevel} mileage={this.state.mileage} battery={this.state.battery} liquidLevel={this.state.liquidLevel}/>
              </div>
              <div className="col p-3">
                  <GraphsRight speed={this.state.speed} gas={this.state.gas}/>
              </div>
          </div>
          <div className="row align-items-end  justify-content-center" id="circles">
              <div className="col-md-5 col-lg-5 col-12 subCircle">
                  <Speed speed={this.state.speed} speedMax={this.state.speedMax} renderSpeedButton ={this.renderSpeedButton}/>
              </div>
              <div className="col-md-5 col-lg-5 col-12 offset-2 subCircle">
                  <RevolutionPerMinute speed={this.state.speed}/>
              </div>
          </div>
          <div className="row justify-content-center fixed-bottom" id={"date"}>
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
