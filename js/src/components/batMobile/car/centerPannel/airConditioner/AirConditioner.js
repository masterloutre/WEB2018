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
        const minAngle = 150;
        const maxAngle = 30;// inverser pour inverser le sens de la jauge
        const minPercent = 20;
        const maxPercent = 80;
        const data = this.props.temperature;
        const angle = (data * (maxAngle - minAngle) /50) + minAngle;
        const percent = (data * (maxPercent - minPercent)/ 50) +minPercent;
        console.log((data * (maxAngle - minAngle) /50) + minAngle)
        console.log((data * (maxPercent - minPercent)/ 100) +minPercent)

        return {
            background :
            "radial-gradient(circle at top, rgba(125, 174, 205, 0.5) , transparent 40%)," +
            "linear-gradient("+ angle + "deg, transparent "+ (percent-1) +"%, black "+ percent +"%)," +
            "radial-gradient(circle at top, transparent 30%, rgba(125, 174, 205, 0.6) 55%)"
        }
    }

    render(){
        return (
            <div className="air-conditioner">
                <span>{this.props.temperature}°C</span>
                <div id="gradient" style={this.setGradient()}></div>
            </div>
        )
    }
}