import React, {Component} from "react"
import "./VillainSheet.css"
import axios from 'axios'


export default class VillainSheet extends Component {
	
    constructor(props) {
        super(props);
        this.state = {};
        console.log("porps", props);
    }

    render() {
        return (
            <div className="villain-sheet">
                <img src=""/>
                <h3>Name: </h3>
                <h4>Pseudo: </h4>
            </div>
        );
    }
}