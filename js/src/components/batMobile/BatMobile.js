import React, {Component} from "react"
import "./BatMobile.css"
import axios from 'axios'
import Car from './car/Car.js'
import CurrentDate from '../currentDate/CurrentDate.js'
import CombatMode from "./combatMode/CombatMode";

export default class BatMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        combatMode: true
    }
  }

  componentWillMount(){ //doit récupérer le modeID
  /*   axios.get("/car")
    .then((results) => {
      this.setState({
        mode: results.data[0].modeId
      })
    });*/
  }

  changeMode = () => {
      this.setState((prevState, props)=> ({combatMode: !prevState.combatMode}))
      console.log("mode changed")
  }

  render(){
      if(this.state.combatMode){
          return(
              <div className="bat-mobile container-fluid h-100">

                  <div id="outer-border" className="">
                      <div id="inner-border" className="">

                      </div>
                  </div>
                  <CombatMode sessionId={this.props.sessionId} changeMode={this.changeMode}/>
              </div>
          )
      }
      else {
          return (
              <div className="bat-mobile container-fluid h-100">

                  <div id="outer-border" className="">
                      <div id="inner-border" className="">

                      </div>
                  </div>
                  <Car sessionId={this.props.sessionId} changeMode={this.changeMode}/>
              </div>
          )
      }

  }

}
