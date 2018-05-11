import React, {Component} from "react"
import "./AirConditioner.css"
import axios from 'axios'
import qs from 'qs'

export default class AirConditioner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setGradient = () => {
        const minAngle = 30;
        const maxAngle = 150;
        const minPercent = 20;
        const maxPercent = 80;
        const data = this.props.temperature;
        const angle = (data * (maxAngle - minAngle) /100) + minAngle;
        const percent = (data * (maxPercent - minPercent)/ 100) +minPercent;
        console.log((data * (maxAngle - minAngle) /100) + minAngle)
        console.log((data * (maxPercent - minPercent)/ 100) +minPercent)

        return {
            background :
            "radial-gradient(circle at bottom, rgba(125, 174, 205, 0.46) , transparent 40%)," +
            /*"linear-gradient("+ angle + "deg, transparent "+ (percent-1) +"%, black "+ percent +"%)," +*/
            "radial-gradient(circle at bottom, rgba(238,203,18,0.88) 25%, rgba(125, 174, 205, 0.46) 55%)"
        }
    }


    render(){
        return (
            <div className="air-conditioner">
                <span>{this.props.temperature}°C</span>
                <div id="gradient" style={this.setGradient()}></div>
                <button onClick={this.increaseTemp}> Increase Temperature </button>
            </div>
        )
    }
}