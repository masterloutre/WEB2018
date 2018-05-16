import React, {Component} from "react"
import "./Armory.css"
import axios from 'axios'
import Ammunitions from "./ammunition/Ammunition";


export default class Armory extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            currentWeapon: 0,
        }

    };

    render() {
        return (
            <div className="armory row align-content-center">
                <div className="col-6 h-50">
                    <div id="weapons-overview">
                        <h3 className={"absolute-top"}>{this.props.weapons[this.state.currentWeapon].name}</h3>
                    </div>
                </div>
                <div className="col-6 h-50">
                    <Ammunitions maxAmmunition={this.props.weapons[this.state.currentWeapon].maxAmmunition} quantity={this.props.weapons[this.state.currentWeapon].rate}/>
                </div>

            </div>
        );
    }
}