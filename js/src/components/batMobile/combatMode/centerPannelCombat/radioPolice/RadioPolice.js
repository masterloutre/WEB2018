import React, {Component} from "react"
import "./RadioPolice.css"
import {DynLineGraph} from "../../../../dynLineGraph/DynLineGraph";

export default class RadioPolice extends Component {

    constructor(props) {
        super(props);
				this.state = {
						time: 0,
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
				this.setState((prevState) =>({
						time: currentDate.getSeconds(),
						freq: Math.acos( Math.cos(prevState.time)) * 180 / Math.PI
				}) //, !()=> console.log(this.state.time + " FREQ " + this.state.freq)
		)}

    render() {
        return (
					<div className="radioPolice row justify-content-center">
							<div className="col-12">
									<span className="justify-text-center"> GCPD Scanner </span>
									<DynLineGraph  data={this.state.freq} unit={"hz/s"} refresh={false}/>
							</div>
					</div>
        );
    }
}
