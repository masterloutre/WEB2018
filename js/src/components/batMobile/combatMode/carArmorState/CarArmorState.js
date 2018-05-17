import React, {Component} from "react"
import "./CarArmorState.css"
import axios from 'axios'


export default class CarArmorState extends Component {
	
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="car-armor-state container-fluid row p-2">
                    <div id={"side-view"} className={"col-6"}>Schéma 1</div>
                    <div id={"top-view"} className={"col-6"}>Schéma 2</div>
            </div>
        );
    }
}