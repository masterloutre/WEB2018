import React, {Component} from "react"
import "./CarArmorDiagram.css"
import axios from 'axios'


export default class CarArmorDiagram extends Component {
	
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    render() {
        console.log("props car armor diagram render", this.props);
        return (
            <div className="col-xs-12 col-sm-6 car-armor-diagram">
                <img src={this.props.imagesUrl} />
            </div>
        );
    }
}