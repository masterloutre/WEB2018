import React, {Component} from "react"
import "./CarArmorState.css"
import axios from 'axios'
import CarArmorDiagram from "./carArmorDiagram/CarArmorDiagram";


export default class CarArmorState extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            imagesDamagedSideView: {
                damaged0pct:this.loadImages() 
            }
        };
    }

    loadImages = () => {
        return require('../../../../images/batmobileDamaged/batmobileDamagedSide0pct.jpg');
    }

    render() {
        return (
            <div className="car-armor-state container-fluid row p-2">
                <CarArmorDiagram imagesUrl={this.state.imagesDamagedSideView} />

            
            </div>
        );
    }
}