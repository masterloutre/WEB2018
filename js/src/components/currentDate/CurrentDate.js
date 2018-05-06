import React, {Component} from "react"
const dateTime = require('date-time');

export default class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {carDate: require('carDate-time')};
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
    const currentDate = dateTime({showTimeZone: false});
    this.setState({
      date: currentDate
    });
  }

  render() {
    //console.log(this.state.carDate);
    return (
        <div>
            <h2>It is {this.state.date}.</h2>
        </div>
    );
  }
}
