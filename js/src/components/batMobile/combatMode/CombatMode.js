import React, {Component} from "react"
import "./CombatMode.css"
import axios from 'axios'
import CenterPannelCombat from "./centerPannelCombat/CenterPannelCombat";
import LawPanel from "./lawPanel/LawPanel";
import ChangeModeButton from "../car/centerPannel/changeModeButton/ChangeModeButton";
import CarArmorState from "./carArmorState/CarArmorState";


export default class CombatMode extends Component {

    constructor(props) {
        super();
        this.state = {
            sessionId: 0,
        };
    }

    componentDidUpdate( prevState, prevProps){
        if(prevProps.sessionId !== this.props.sessionId) {
            this.setState({sessionId: this.props.sessionId})
        }
    }

    render() {
        return (
            <div className="combat-mode container-fluid h-100">
                <div className="row" id={"top-panels"}>
                    <div className={"col-4"}>
                        <LawPanel/>
                    </div>
                    <div className={"col-8"}>
                        <CenterPannelCombat sessionId={this.props.sessionId}/>
                    </div>
                </div>
                <div className="row justify-content-center" id={"bottom-panels"}>
                    <div id="change-mode-button-container" className={"col-1 absolute self-align-center"}><ChangeModeButton changeMode={this.props.changeMode}/></div>
                    <CarArmorState sessionId={this.props.sessionId}/>
                </div>
            </div>
        )
    }
}