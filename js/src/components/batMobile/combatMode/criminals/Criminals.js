import React, {Component} from "react"
import "./Criminals.css"
import axios from 'axios'
import VillainSheet from "./villainSheet/VillainSheet";


export default class Criminals extends Component {
	
    constructor(props) {
        super(props);
        this.state = {};
        console.log("props criminal", props);
    }

    componentDidMount(){
        this.fetchCriminalsData();
    }

    fetchCriminalsData = () => {
        console.log("HELLO");
       axios.get("/criminals/" + this.props.sessionId)
            .then((results) => {
                console.log(results)
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="criminals">
                <VillainSheet name="coucou"/>
            </div>
        );
    }
}