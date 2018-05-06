import React, {Component} from "react"
import "./Graphs.css"
import axios from 'axios'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";


export default class Graphs extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="graphs">
            </div>
        )
    }
}