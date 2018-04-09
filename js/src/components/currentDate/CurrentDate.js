import React, {Component} from "react"
const dateTime = require('date-time');

export default class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: require('date-time')};
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
    const currentDate = dateTime();
    this.setState({
      date: currentDate
    });
  }

  render() {
    return (
        <h2>It is {this.state.date}.</h2>
    );
  }
}
