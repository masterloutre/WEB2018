import React, {Component} from "react"
import "./CenterPannel.css"
import axios from 'axios'
import ChangeModeButton from "./changeModeButton/ChangeModeButton";
import Gas from "./gas/Gas"
import AirConditioner from "./airConditioner/AirConditioner";

export default class CenterPannel extends Component {

    constructor(props) {
        super();
        this.state = {
          "signal-left": false,
          "signal-right": false,
          "headlights": false,
          "windshield-wiper": false
        };
    }

    setFlashBackground(componentId, flashing){
        if(flashing)
          document.getElementById(componentId).style.animation = "flash 1.2s linear infinite  normal";
        else
          document.getElementById(componentId).style.animation = "none";
    }

    triggerFlash(componentId){
      if(componentId === 'windshield-wiper' || componentId === 'headlights')
        this.setState(prevState => ({[componentId]: !prevState[componentId]}));
      else {
        console.log(componentId + " signal before : " +this.state[componentId])
        this.setState(prevState => ({[componentId]: !prevState[componentId]}), () => {
          console.log(componentId + " signal before : " +JSON.stringify(this.state));
          this.setFlashBackground(componentId, this.state[componentId]);
        });
      }
    }

    renderHeadlights = () => {
      if(this.state["headlights"]){
        return(
          <svg id="a5d923d8-03c3-4da0-a418-8a900e47a3ea" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.79 33.26"><title>headlights-yellow</title><path fill='#eecb12' d="M16.53,0a18.07,18.07,0,0,0-2.44.16C7.43,1.06,0,7.76,0,16.77S6.27,30.92,13.09,32.62c5.23,1.3,10.39.64,13-2.31a5.36,5.36,0,0,0,1.25-3.07,2.67,2.67,0,0,0,0-.4L27.28,6A4.21,4.21,0,0,0,26,3.13a8.68,8.68,0,0,0-3-2,15.42,15.42,0,0,0-4.12-1A20.44,20.44,0,0,0,16.53,0Zm0,2a14.56,14.56,0,0,1,2.09.09,13.5,13.5,0,0,1,3.6.91,7,7,0,0,1,2.34,1.5A2.27,2.27,0,0,1,25.28,6l.12,20.78c-.14,2-1.4,3.21-3.56,3.94a15.41,15.41,0,0,1-8.25,0C7.48,29.16,2.08,23.63,2,16.88S8.43,3,14.34,2.16A17.92,17.92,0,0,1,16.53,2ZM30.08,7.28a1,1,0,0,0-.58,1.29v0a1,1,0,0,0,1.3.57h0l15.23.78A1,1,0,1,0,45.53,8L30.29,7.22Zm0,9.41a1,1,0,1,0,.74,1.87h0l15.23.78a1,1,0,0,0,.7-1.23,1,1,0,0,0-1.22-.7l-15.24-.78Zm0,9.41A1,1,0,1,0,30.82,28h0l15.23.78a1,1,0,0,0,.7-1.23,1,1,0,0,0-1.22-.7L30.29,26Z" transform="translate(0 0)"/></svg>
        );
      }
      else {
        return(
          <svg id="7e1afb1b-c4e1-4731-8c19-31f08b9e0f0b" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.89 33.26"><title>headlights</title><path fill='rgba(125, 174, 205, 0.46)' d="M16.53,0a18.09,18.09,0,0,0-2.44.16C7.43,1.06,0,7.76,0,16.77S6.27,30.92,13.09,32.62c5.23,1.3,10.39.64,13-2.31a5.35,5.35,0,0,0,1.25-3.07,3.29,3.29,0,0,0,0-.4L27.28,6A4.23,4.23,0,0,0,26,3.13a8.81,8.81,0,0,0-3-2,15.62,15.62,0,0,0-4.12-1A19.42,19.42,0,0,0,16.53,0h0Zm0,2a15.76,15.76,0,0,1,2.09.09A13.71,13.71,0,0,1,22.22,3a7.05,7.05,0,0,1,2.34,1.5A2.23,2.23,0,0,1,25.28,6L25.4,26.78c-0.14,2-1.4,3.21-3.56,3.94a15.39,15.39,0,0,1-8.25,0C7.48,29.16,2.08,23.63,2,16.88S8.43,3,14.34,2.16A18.23,18.23,0,0,1,16.53,2h0ZM33.15,5.88A1,1,0,0,0,32.26,7a1,1,0,0,0,1.11.89l14.5,4.74a1,1,0,1,0,0-2L33.37,5.88H33.15Zm0,9.75a1,1,0,0,0,.22,2l14.5,4.74a1,1,0,1,0,0-2l-14.5-4.74H33.15Zm0,9.75a1,1,0,0,0,.22,2l14.5,4.74a1,1,0,1,0,0-2l-14.5-4.74H33.15Z"/></svg>
        );
      }
    }

    renderwindshield = () => {
      if(this.state["windshield-wiper"]){
        return(
        <svg id="_800fe379-6a37-4aa1-835c-ee54e9d3b99e" data-name="800fe379-6a37-4aa1-835c-ee54e9d3b99e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.94 38.83"><title>windshield-wiper-yellow</title><path fill='#ffcb12' d="M81.93,12.1a1,1,0,0,0-.45-.62,77.21,77.21,0,0,0-81,0,1,1,0,0,0-.33,1.37h0l15.56,25.5a1,1,0,0,0,1.37.33h0a45.45,45.45,0,0,1,47.69,0,1,1,0,0,0,1.38-.32h0l15.62-25.5A1,1,0,0,0,81.93,12.1Zm-17,24.31a47.9,47.9,0,0,0-15.6-5.72L59.66,12.81a1,1,0,0,0-1.49-1.34,1,1,0,0,0-.17.27v.07L47.22,30.34a47,47,0,0,0-22.13,2.32L36.55,12.81a1,1,0,1,0-1.69-1.07h0v.07L22.2,33.66v.16A48.71,48.71,0,0,0,17,36.41L2.32,12.67a75.18,75.18,0,0,1,77.22,0Z" transform="translate(0 0)"/></svg>
        );
      }
      else {
        return(
          <svg id="c2df3727-29c0-42bb-b684-6b820ac34f7f" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.95 38.83"><title>windshield-wiper</title><path fill='rgba(125, 174, 205, 0.46)' d="M81.93,12.1a1,1,0,0,0-.45-0.62,77.19,77.19,0,0,0-81,0,1,1,0,0,0-.33,1.37h0L15.71,38.35a1,1,0,0,0,1.37.33h0a45.44,45.44,0,0,1,47.69,0,1,1,0,0,0,1.38-.32h0L81.77,12.86A1,1,0,0,0,81.93,12.1Zm-17,24.31a47.7,47.7,0,0,0-15.6-5.72L59.66,12.81A1,1,0,1,0,58,11.74l0,0.07L47.22,30.34a47,47,0,0,0-22.13,2.32L36.55,12.81a1,1,0,0,0-1.69-1.07l0,0.07L22.2,33.66a0.94,0.94,0,0,0,0,.16,48.15,48.15,0,0,0-5.22,2.59L2.32,12.67a75.19,75.19,0,0,1,77.22,0Z"/></svg>
        );
      }
    }

    render() {
        return (
            <div className="center-pannel container-fluid">
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-5 absolute"><ChangeModeButton changeMode={this.props.changeMode} onClick={()=>console.log("click")}/></div>
                </div>
                <ul className="row absolute-top w-100 h-100">
                    <li id="gas-pannel">
                        <Gas gas={this.props.gas}/>
                    </li>
                    <li id="windshield-wiper" onClick={() => this.triggerFlash("windshield-wiper")}>
                        {this.renderwindshield()}
                    </li>
                    <li id="signal-right" onClick={() => this.triggerFlash("signal-right")}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 90 112.5" >
                            <polygon fill='rgba(125, 174, 205, 0.46)' filter={'url(#glow)'} points="80.396,45.001 64.076,28.709 64.076,38.701 49.359,38.701 45.76,51.302 64.076,51.302 64.076,61.292  "/>
                        </svg>
                    </li>
                    <li id="air-conditioner-panel">
                        <AirConditioner temperature={this.props.temperature}/>
                    </li>
                    <li id="signal-left" onClick={() => this.triggerFlash("signal-left")}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 90 112.5" >
                            <polygon fill='rgba(125, 174, 205, 0.46)' filter={'url(#glow)'} points="44.241,38.7 25.924,38.7 25.924,28.709 9.603,45 25.924,61.292 25.924,51.3 40.641,51.3  "/>
                        </svg>
                    </li>
                    <li id="headlights" onClick={() => this.triggerFlash("headlights")}>
                      {this.renderHeadlights()}
                    </li>
                </ul>


            </div>
        )
    }
}
