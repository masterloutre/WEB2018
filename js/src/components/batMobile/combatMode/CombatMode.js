import React, {Component} from "react"
import "./CombatMode.css"
import axios from 'axios'


export default class CombatMode extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="combat-mode">
                <h2>THIS IS COMBAT MODE</h2>
                <button onClick={()=>this.props.changeMode()}>Change Mode</button>
            </div>
        )
    }
}