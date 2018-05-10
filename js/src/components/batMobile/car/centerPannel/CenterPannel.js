import React, {Component} from "react"
import "./CenterPannel.css"
import axios from 'axios'
import ChangeModeButton from "./changeModeButton/ChangeModeButton";
import Gas from "./gas/Gas"

export default class CenterPannel extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="center-pannel container-fluid">
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-5 absolute"><ChangeModeButton/></div>

                </div>
                {/*
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                */}
                    <ul className="row absolute-top w-100 h-100">
                    <li id="gas-pannel">
                        <Gas gas={this.props.gas}/>
                        {/*
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px">
                            <title>automotive</title>
                            <path fill='rgba(255, 255, 255, 0.7)' d="M56.45,22.57h-21a2,2,0,0,0-2,2v8.14a2,2,0,0,0,2,2h21a2,2,0,0,0,2-2V24.57A2,2,0,0,0,56.45,22.57Zm-21,10.14V24.57h21v8.14Z"/>
                            <path fill='rgba(255, 255, 255, 0.7)' d="M87.63,30.32a2.35,2.35,0,0,0-.51-.31l-1.27-4a3.69,3.69,0,0,0-2.52-2.45l-4.85-1.38a1,1,0,0,0-.55,1.92l4.85,1.38a1.7,1.7,0,0,1,1.16,1.13L85,30l-1.77.37h0l-3,.62a2.36,2.36,0,0,0-1.87,2.3v7a2.35,2.35,0,0,0,3.12,2.22l.94-.32V68.93a5.93,5.93,0,0,1-11.86,0V43.8a4.44,4.44,0,0,0-3.44-4.31V16.43a4,4,0,0,0-4-4h-35a4,4,0,0,0-4,4V80.5H13A1.5,1.5,0,0,0,11.5,82v4.07a1.5,1.5,0,0,0,1.5,1.5H79.39a1.5,1.5,0,0,0,1.5-1.5V82a1.5,1.5,0,0,0-1.5-1.5H67.14V41.58a2.44,2.44,0,0,1,1.44,2.22V68.93a7.93,7.93,0,0,0,15.86,0V41.53l2.47-.85h0a2.35,2.35,0,0,0,1.59-2.22v-6.3A2.34,2.34,0,0,0,87.63,30.32ZM78.89,85.57H13.5V82.5H78.89ZM26.12,80.5V16.43a2,2,0,0,1,2-2h35a2,2,0,0,1,2,2V80.5ZM82.44,32.56v2.25l-2.06.42v-2a.35.35,0,0,1,.28-.34Zm4.06,5.89a.35.35,0,0,1-.24.33l-5.41,1.86a.35.35,0,0,1-.47-.33v-3l2.72-.56a1.68,1.68,0,0,0,1.34-1.64V32.15l1.63-.34h.07a.35.35,0,0,1,.35.35Z"/>
                        </svg>
                        <div></div>
                        */}
                    </li>
                    <li id="windshield-wiper">
                        <svg id="c2df3727-29c0-42bb-b684-6b820ac34f7f" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.95 38.83"><title>windshield-wiper</title><path fill='rgba(125, 174, 205, 0.46)' d="M81.93,12.1a1,1,0,0,0-.45-0.62,77.19,77.19,0,0,0-81,0,1,1,0,0,0-.33,1.37h0L15.71,38.35a1,1,0,0,0,1.37.33h0a45.44,45.44,0,0,1,47.69,0,1,1,0,0,0,1.38-.32h0L81.77,12.86A1,1,0,0,0,81.93,12.1Zm-17,24.31a47.7,47.7,0,0,0-15.6-5.72L59.66,12.81A1,1,0,1,0,58,11.74l0,0.07L47.22,30.34a47,47,0,0,0-22.13,2.32L36.55,12.81a1,1,0,0,0-1.69-1.07l0,0.07L22.2,33.66a0.94,0.94,0,0,0,0,.16,48.15,48.15,0,0,0-5.22,2.59L2.32,12.67a75.19,75.19,0,0,1,77.22,0Z"/></svg>
                    </li>
                    <li id="signal-right">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 90 112.5" >
                            <polygon fill='rgba(125, 174, 205, 0.46)' points="80.396,45.001 64.076,28.709 64.076,38.701 49.359,38.701 45.76,51.302 64.076,51.302 64.076,61.292  "/>
                        </svg>
                    </li>
                    <li id="air-conditioner-panel">
                        <div></div>
                    </li>
                    <li id="signal-left">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 90 112.5" >
                            <polygon fill='rgba(125, 174, 205, 0.46)' points="44.241,38.7 25.924,38.7 25.924,28.709 9.603,45 25.924,61.292 25.924,51.3 40.641,51.3  "/>
                        </svg>
                    </li>
                    <li id="headlights">
                        <svg id="7e1afb1b-c4e1-4731-8c19-31f08b9e0f0b" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.89 33.26"><title>headlights</title><path fill='rgba(125, 174, 205, 0.46)' d="M16.53,0a18.09,18.09,0,0,0-2.44.16C7.43,1.06,0,7.76,0,16.77S6.27,30.92,13.09,32.62c5.23,1.3,10.39.64,13-2.31a5.35,5.35,0,0,0,1.25-3.07,3.29,3.29,0,0,0,0-.4L27.28,6A4.23,4.23,0,0,0,26,3.13a8.81,8.81,0,0,0-3-2,15.62,15.62,0,0,0-4.12-1A19.42,19.42,0,0,0,16.53,0h0Zm0,2a15.76,15.76,0,0,1,2.09.09A13.71,13.71,0,0,1,22.22,3a7.05,7.05,0,0,1,2.34,1.5A2.23,2.23,0,0,1,25.28,6L25.4,26.78c-0.14,2-1.4,3.21-3.56,3.94a15.39,15.39,0,0,1-8.25,0C7.48,29.16,2.08,23.63,2,16.88S8.43,3,14.34,2.16A18.23,18.23,0,0,1,16.53,2h0ZM33.15,5.88A1,1,0,0,0,32.26,7a1,1,0,0,0,1.11.89l14.5,4.74a1,1,0,1,0,0-2L33.37,5.88H33.15Zm0,9.75a1,1,0,0,0,.22,2l14.5,4.74a1,1,0,1,0,0-2l-14.5-4.74H33.15Zm0,9.75a1,1,0,0,0,.22,2l14.5,4.74a1,1,0,1,0,0-2l-14.5-4.74H33.15Z"/></svg>
                    </li>
                    </ul>

            </div>
        )
    }
}