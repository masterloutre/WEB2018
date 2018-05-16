import React, {Component} from "react"
import "./CarDate.css"
import axios from 'axios'
import CurrentDate from "../../../currentDate/CurrentDate";


export default class CarDate extends Component {

    constructor(props) {
        super(props);
        const currentDate = new Date()
        this.state = {
            date: currentDate.toDateString(),
            time: currentDate.toTimeString()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const currentDate = new Date();
        this.setState({
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString('fr-FR')
        })
    }

    render() {
        return (
            <div className="car-date text-center">
                <p className="text-center">Hello Batman !<br/></p>
                <h2>{this.state.time}</h2>
                <h3>{this.state.date}</h3>
            </div>
        );
    }
}
