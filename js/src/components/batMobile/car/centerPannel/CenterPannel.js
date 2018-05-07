import React, {Component} from "react"
import "./CenterPannel.css"
import axios from 'axios'
import ChangeModeButton from "./changeModeButton/ChangeModeButton";


export default class CenterPannel extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="center-pannel container-fluid">
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-5 absolute"><ChangeModeButton/></div>

                </div>
                {/*
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                */}
            </div>
        )
    }
}