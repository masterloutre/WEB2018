import React, {Component} from "react"
import "./Car.css"
import axios from 'axios'
import CurrentDate from '../../currentDate/CurrentDate.js'


export default class Car extends Component {

  render(){
    return (
      <div className="car">
         <CurrentDate/>
      </div>
    )
  }
}
