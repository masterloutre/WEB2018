import React, {Component} from "react"
import "./CarArmorDiagram.css"
import axios from 'axios'


export default class CarArmorDiagram extends Component {
	
    constructor(props) {
        super(props);
        console.log("props car armor diagram", props);
        this.state = {};
    }

    render() {
        return (
            <div className="col-6 car-armor-diagram">
                <img src={this.props.imagesUrl.damaged0pct} />
            </div>
        );
    }
}