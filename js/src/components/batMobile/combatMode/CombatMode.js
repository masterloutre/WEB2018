import React, {Component} from "react"
import "./CombatMode.css"
import axios from 'axios'
import CenterPannel from "../car/centerPannel/CenterPannel";
import CenterPannelCombat from "./centerPannelCombat/CenterPannelCombat";
import Criminals from "./criminals/Criminals";
import ChangeModeButton from "../car/centerPannel/changeModeButton/ChangeModeButton";
import CarArmorState from "./carArmorState/CarArmorState";


export default class CombatMode extends Component {

    constructor(props) {
        super();
        this.state = {
            sessionId: 0,
            criminals: [
                {
                    id: 0,
                    name: "",
                    firstname: "",
                    nickname: "",
                    age: 0,
                    sex: 0,
                    size: 0,
                    crimeNb: 0,
                    dangerousness: 0,
                    xPos: 0,
                    yPos: 0

                }
            ]
        };
    }

    componentDidMount(){
        this.fetchLawData()
    }


    componentDidUpdate( prevState, prevProps){
        if(prevProps.sessionId !== this.props.sessionId) {
            this.setState({sessionId: this.props.sessionId})
        }
    }


    fetchLawData = () => {
        axios.get("/Law/")
            .then((results) => {
                console.log("law", results.data[3].name)
                this.setState({
                    criminals: results.data
                })
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="combat-mode container-fluid h-100">
                <div className="row" id={"top-panels"}>
                    <div className={"col-4"}>
                        <Criminals sessionId={this.props.sessionId}/>
                    </div>
                    <div className={"col-8"}>
                        <CenterPannelCombat sessionId={this.props.sessionId}/>
                    </div>
                </div>
                <div className="row justify-content-center" id={"bottom-panels"}>
                    <div id="change-mode-button-container" className={"col-1 absolute self-align-center"}><ChangeModeButton changeMode={this.props.changeMode}/></div>
                    <CarArmorState/>
                </div>
            </div>
        )
    }
}