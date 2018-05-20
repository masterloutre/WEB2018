import React, {Component} from "react"
import "./BatMobile.css"
import Car from './car/Car.js'
import CombatMode from "./combatMode/CombatMode";

export default class BatMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        combatMode: false
    }
  }

  changeMode = () => {
      this.setState((prevState, props)=> ({combatMode: !prevState.combatMode}))
      /*
      var audio = new Audio('../../sounds/because.mp3');
      audio.play();
      console.log("mode changed" + JSON.stringify(audio))
      */
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
                  <div className="general-overlay"></div>
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
                  <div className="general-overlay"></div>
              </div>
              
          )
      }

  }

}
