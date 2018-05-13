import React, {Component} from "react"
import "./Graphs.css"
import axios from 'axios'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";


export default class Graphs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="graphs row justify-content-center">
                <div className="col-5 p-2">
                    <DynLineGraph  data={this.props.speed} unit={"km/h"}/>
                </div>
            </div>
        )
    }
}