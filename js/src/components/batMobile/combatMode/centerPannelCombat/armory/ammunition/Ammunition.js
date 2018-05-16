import React, {Component} from "react"
import "./Ammunition.css"
import axios from 'axios'


export default class Ammunition extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ammunition">
                <p>quantity : {this.props.quantity} %</p>
                <p>maxAmmunition : {this.props.maxAmmunition}</p>
            </div>
        )
    }
}