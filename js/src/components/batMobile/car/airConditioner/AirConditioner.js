import React, {Component} from "react"
import "./AirConditioner.css"
import axios from 'axios'

export default class AirConditioner extends Component {

    constructor() {
        super();
        this.state = {
            temperature: 0,
            unit: "°C"
        };
    }

    componentWillMount(){
        axios.get("/car/airconditioner")
            .then((results) => {
                console.log(results)
                this.setState( (prevState, props) => ({
                    ...prevState,
                    temperature: results.data.temperature
                })
                )
            });
    }

    increaseTemp = () => {
        console.log("click to increase temp")
        this.setState( (prevState, props) => (
            {
                ...prevState,
                temperature: prevState.temperature + 1
            }
        ))
        axios.put("/car/airconditioner", { "temperature":12})
            .then((response) => (console.log(response)))
            .catch((error)=> (console.log(error)))
        axios.get("/car/airconditioner")
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

    }

    render(){
        return (
            <div className="air-conditioner">
                <h2>Temperature : {this.state.temperature} {this.state.unit}</h2>
                <button onClick={this.increaseTemp}> Increase Temperature </button>
            </div>
        )
    }
}