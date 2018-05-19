import React, {Component} from "react"
import "./RadioPolice.css"
import axios from 'axios'
import {DynLineGraph} from "../../../../dynLineGraph/DynLineGraph";
import CurrentDate from "../../../../currentDate/CurrentDate";

export default class RadioPolice extends Component {

    constructor(props) {
        super(props);
				const currentDate = new Date()
				this.state = {
						time: currentDate.toTimeString(),
						freq: 120
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
						time: currentDate.toLocaleTimeString('fr-FR'),
						freq: 120
				})
		}

    render() {
        return (
					<div className="radioPolice row">
							<div className="col-7">
									<span> GCPD Scanner </span>
									<DynLineGraph  data={211} unit={"hz/s"}/>
							</div>
					</div>
        );
    }
}
