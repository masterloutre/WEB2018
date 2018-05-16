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
            <div className="car-armor-state">
            </div>
        );
    }
}