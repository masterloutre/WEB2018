import React, {Component} from "react"
import "./Gas.css"
import axios from 'axios'


const grd = {background : "radial-gradient(circle at bottom, transparent 22%, rgba(238,203,18,0.88) 22%, transparent 40%)"};

export default class Gas extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    setGradient = () => {
        const minAngle = 30;
        const maxAngle = 150;
        const minPercent = 20;
        const maxPercent = 80;
        const gas = this.props.gas;
        const angle = (gas * (maxAngle - minAngle) /100) + minAngle;
        const percent = (gas * (maxPercent - minPercent)/ 100) +minPercent;
        console.log((gas * (maxAngle - minAngle) /100) + minAngle)
        console.log((gas * (maxPercent - minPercent)/ 100) +minPercent)

        return {
            background :
                "radial-gradient(circle at bottom, rgba(238,203,18,0.5) , transparent 40%)," +
                "linear-gradient("+ angle + "deg, transparent "+ (percent-1) +"%, black "+ percent +"%)," +
                "radial-gradient(circle at bottom, rgba(125, 174, 205, 0.46) 25%, rgba(238,203,18,0.88) 55%)"
        }
    }



    render() {
        return (
            <div className="gas">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                    <title>automotive</title>
                    <path fill='rgba(255, 255, 255, 0.7)' d="M56.45,22.57h-21a2,2,0,0,0-2,2v8.14a2,2,0,0,0,2,2h21a2,2,0,0,0,2-2V24.57A2,2,0,0,0,56.45,22.57Zm-21,10.14V24.57h21v8.14Z"/>
                    <path fill='rgba(255, 255, 255, 0.7)' d="M87.63,30.32a2.35,2.35,0,0,0-.51-.31l-1.27-4a3.69,3.69,0,0,0-2.52-2.45l-4.85-1.38a1,1,0,0,0-.55,1.92l4.85,1.38a1.7,1.7,0,0,1,1.16,1.13L85,30l-1.77.37h0l-3,.62a2.36,2.36,0,0,0-1.87,2.3v7a2.35,2.35,0,0,0,3.12,2.22l.94-.32V68.93a5.93,5.93,0,0,1-11.86,0V43.8a4.44,4.44,0,0,0-3.44-4.31V16.43a4,4,0,0,0-4-4h-35a4,4,0,0,0-4,4V80.5H13A1.5,1.5,0,0,0,11.5,82v4.07a1.5,1.5,0,0,0,1.5,1.5H79.39a1.5,1.5,0,0,0,1.5-1.5V82a1.5,1.5,0,0,0-1.5-1.5H67.14V41.58a2.44,2.44,0,0,1,1.44,2.22V68.93a7.93,7.93,0,0,0,15.86,0V41.53l2.47-.85h0a2.35,2.35,0,0,0,1.59-2.22v-6.3A2.34,2.34,0,0,0,87.63,30.32ZM78.89,85.57H13.5V82.5H78.89ZM26.12,80.5V16.43a2,2,0,0,1,2-2h35a2,2,0,0,1,2,2V80.5ZM82.44,32.56v2.25l-2.06.42v-2a.35.35,0,0,1,.28-.34Zm4.06,5.89a.35.35,0,0,1-.24.33l-5.41,1.86a.35.35,0,0,1-.47-.33v-3l2.72-.56a1.68,1.68,0,0,0,1.34-1.64V32.15l1.63-.34h.07a.35.35,0,0,1,.35.35Z"/>
                </svg>
                <div id="gradient" style={this.setGradient()}></div>
            </div>
        )
    }
}