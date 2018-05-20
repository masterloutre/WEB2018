import React, {Component} from "react"
import "./OutlawCard.css"
import axios from 'axios'


export default class OutlawCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setBorderColor = () => {
        return(
            {
                border : "1px solid rgba(238,203,18," + (this.props.dangerousness/10) + ")"
            }
        )
    }

    render() {
        return (
            <div className="outlaw-card" style={this.setBorderColor()}>
                <h2><span>{this.props.nickname}</span> {this.props.firstname} {this.props.name}</h2>
                <hr/>
                <p>genre : {(this.props.sex === 0)?"male":"female"}</p>
                <p>age : {this.props.age}</p>
                <p>number of crimes commited : {this.props.crimeNb}</p>
            </div>
        )
    }
}
