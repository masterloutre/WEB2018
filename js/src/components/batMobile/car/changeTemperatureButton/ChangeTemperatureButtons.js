import React, {Component} from "react"
import "./ChangeTemperatureButtons.css"
import axios from 'axios'


export default class ChangeTemperatureButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="change-temperature-buttons row justify-content-center">
                <button id="increase-temperature" onClick={() => this.props.changeTemperature("+")} className="col-3">
                    +
                </button>
                <button id="decrease-temperature" onClick={() => this.props.changeTemperature("-")} className="col-3 offset-1">
                    -
                </button>
            </div>
        )
    }
}