import React, {Component} from "react"
import "./ChangeModeButton.css"
import axios from 'axios'


export default class ChangeModeButton extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="change-mode-button row justify-content-center align-items-center align-self-center "
                 onClick={()=>this.props.changeMode()}>
                <h3 >Change Mode</h3>
            </div>
        )
    }
}