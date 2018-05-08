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
                {/*
                <svg className=" row w-100 h-100 separator absolute-top" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="100" y2="100"
                        stroke='rgba(125, 174, 205, 0.46)'
                        strokeWidth="1"
                    />
                    <line x1="0" y1="100" x2="100" y2="0"
                          stroke='rgba(125, 174, 205, 0.46)'
                          strokeWidth="1"
                    />
                </svg>
                */}
                <div className="row w-100 h-100 justify-content-center align-items-center absolute-top">
                    <div className="center-button col-5 absolute"><ChangeModeButton/></div>

                </div>
                {/*
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                <div className="row w-100 h-50 justify-content-center align-items-center">
                </div>
                */}
                    <ul className="row absolute-top w-100 h-100">
                    <li><span>Gas</span></li>
                    <li><span>"Essuie glace"</span></li>
                    <li><span>Right Signal</span></li>
                    <li><span>Air Conditioner</span></li>
                    <li><span>Left Signal</span></li>
                    <li><span>Lights</span></li>
                    </ul>

            </div>
        )
    }
}