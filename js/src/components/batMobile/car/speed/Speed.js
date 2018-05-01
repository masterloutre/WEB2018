import React, {Component} from "react"
import styles from "./Speed.css"
import { Pie } from '@nivo/pie'

export default class Speed extends Component {

  constructor() {
    super();
    this.state = {
      speed: 0,
      nbMaxDivision: 10,
      nbMaxDivisionFilled: 9,
      speedMax: 350,
      data: []
    };
  }

  componentDidMount(){
    //this.setState(speed : this.props.speed);
    this.buildData();
  }

  buildData(){
    var seuil = Math.round(this.state.speed * this.state.nbMaxDivisionFilled / this.state.speedMax);
    var i;
    console.log("seuil  " + seuil);
    const filledData = Array(0);
    for (i = 0; i < seuil; i++) {
      filledData.push({
        "id": "inferior"+i,
        "value" : 200,
        "color": "hsl(195, 50%, 50%)"
      });
    }
    for (i = seuil; i <  this.state.nbMaxDivisionFilled; i++) {
      filledData.push({
        "id": "superior"+i,
        "value" : 200,
        "color": "hsl(190, 20%, 20%)"
      });
    }
    for (i = this.state.nbMaxDivisionFilled; i <  this.state.nbMaxDivision; i++) {
      filledData.push({
        "id": "superior"+i,
        "value" : 200,
        "color": styles.speedBackgroundColor
      });
    }
    this.setState({...this.state, data: filledData}, () => {
      console.log("data : " + JSON.stringify(this.state.data));
    });
  }


  render(){
    return (
      <div className="speed">
        <h2>{this.state.speed} KM/H</h2>
         <Pie
         width={400}
         height={400}
        data={this.state.data}
        margin={{
            "top": 40,
            "right": 80,
            "bottom": 80,
            "left": 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="d320c"
        colorBy={function(e){return e.color}}
        borderColor="inherit:darker(0.6)"
        enableRadialLabels={false}
        enableSlicesLabels={false}
        isInteractive={false}
        animate={false}
    />
      </div>
    )}
}
