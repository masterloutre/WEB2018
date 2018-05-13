import React, {Component} from "react"
import "./BatMobile.css"
import axios from 'axios'
import Car from './car/Car.js'
import CurrentDate from '../currentDate/CurrentDate.js'

export default class BatMobile extends Component {
  constructor() {
    super();
    this.state = {
      mode: null
    };
  }

  componentWillMount(){ //doit récupérer le modeID
  /*   axios.get("/car")
    .then((results) => {
      this.setState({
        mode: results.data[0].modeId
      })
    });*/
  }

  render(){
    console.log(this.state.mode);
    return (
      <div className="bat-mobile container-fluid h-100">

        <div id="outer-border" className="">
            <div id="inner-border" className="">

            </div>
        </div>
          <Car/>
      </div>
    )
  }

}
