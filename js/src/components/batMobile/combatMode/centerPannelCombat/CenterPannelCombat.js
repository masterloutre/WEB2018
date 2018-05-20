import React, {Component} from "react"
import "./CenterPannelCombat.css"
import Armory from "./armory/Armory";
import RadioPolice from "./radioPolice/RadioPolice"


export default class CenterPannelCombat extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="center-pannel-combat container-fluid ">
                <RadioPolice />
                <Armory sessionId={this.props.sessionId} weapons={this.props.weapons} fireWeapon={this.props.fireCurrentWeapon}/>
            </div>
        );
    }
}
