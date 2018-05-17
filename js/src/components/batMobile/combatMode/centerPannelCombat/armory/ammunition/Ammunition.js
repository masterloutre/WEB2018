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
                <div id={"ammunition-graph"}>quantity : {this.props.quantity} %</div>
                <p>maxAmmunition : {this.props.maxAmmunition}</p>
                <button onClick={()=>this.props.fire()}>fire </button>
            </div>
        )
    }
}