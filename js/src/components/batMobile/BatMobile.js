import React, {Component} from "react"
import "./BatMobile.css"
import axios from 'axios'
import Car from './car/Car.js'

export default class BatMobile extends Component {
  constructor() {
    super();
    this.state = {
      mode: null
    };
  }

  componentWillMount(){
     axios.get("/")
    .then((results) => {
      this.setState({
        mode: results.data[0].modeId
      })
    });
  }

  render(){
    console.log(this.state.mode);
    return (
      <div className="batMobile">
        <Car/>
      </div>
    )
  }

}
