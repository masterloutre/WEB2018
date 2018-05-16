import React, {Component} from "react"
import "./CombatMode.css"
import axios from 'axios'
import CenterPannel from "../car/centerPannel/CenterPannel";
import CenterPannelCombat from "./centerPannelCombat/CenterPannelCombat";


export default class CombatMode extends Component {

    constructor(props) {
        super();
        this.state = {
            sessionId: 0,
            weapons: [{
                id: 0,
                name: "",
                maxAmmunition: 0,
                rate: 0
            }],
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
        this.fetchWeaponryData()
    }

    componentDidUpdate( prevState, prevProps){
        if(prevProps.sessionId !== this.props.sessionId) {
            this.setState({sessionId: this.props.sessionId})
            //this.fetchWeaponryData()
        }
    }

    fetchWeaponryData = () => {
        axios.get("/weapons/"+ this.props.sessionId)
            .then((results) => {
                console.log(results.data[3].name)
                this.setState({
                    weapons: results.data
                })
            })
            .catch((error) => console.log(error))
    }

    updateWeaponBDD = (weaponId) => {
        axios.put("/weapons/"+ weaponId + "/user/" + this.props.sessionId, {
            rate : this.state.weapons[weaponId].rate
        })
            .then((results) => console.log(results))
            .catch((error) => console.log(error))
    }

    fireWeapon = (weaponId) => () => {
        if(this.state.weapons[weaponId].rate > 0){
            this.setState((prevState, props) => {
                let weaponsCopy = prevState.weapons.slice()
                weaponsCopy[weaponId] = {
                    ...prevState.weapons[weaponId],
                    rate : prevState.weapons[weaponId].rate - 1
                }
                return ({
                        weapons: weaponsCopy
                    })
            })
        }

    }

    fetchLawData = () => {
        axios.get("/Law/")
            .then((results) => {
                console.log(results.data[3].name)
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
                    <div className={"col-3"}></div>
                    <div className={"col-6"}><CenterPannelCombat weapons={this.state.weapons} fireWeapon={this.fireWeapon} sessionId={this.props.sessionId}/></div>
                    <div className={"col-3"}></div>
                </div>
                <div className="row" id={"bottom-panels"}>
                <h2>THIS IS COMBAT MODE</h2>
                <button onClick={()=>this.props.changeMode()}>Change Mode</button>
                </div>
            </div>
        )
    }
}