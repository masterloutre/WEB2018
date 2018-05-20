import React, {Component} from "react"
import "./GraphsRight.css"
import axios from 'axios'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";


export default class GraphsRight extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="graphsRight row justify-content-center">
                <div className="col-7 p-2 offset-3">
                    <DynLineGraph  data={this.props.speed} unit={"km/h"} refresh={true}/>
                </div>
            </div>
        )
    }
}
