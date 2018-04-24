import React, {Component} from "react"
import "./Speed.css"
import { Pie } from '@nivo/pie'

export default class Speed extends Component {

  constructor() {
    super();
    this.state = {
      speed: 150,
      nbMaxDivision: 10,
      speedMax: 350,
      data: []
    };
  }

  componentDidMount(){
    this.buildData();
  }

  buildData(){
    var seuil = Math.round(this.state.speed * this.state.nbMaxDivision / this.state.speedMax);
    console.log("seuil  " + seuil);
    const filledData = Array(0);
    for (var i = 0; i < seuil; i++) {
      filledData.push({
        "id": "inferior"+i,
        "value" : 200,
        "color": "hsl(197, 70%, 50%)"
      });
    }
    for (var i = seuil; i <  this.state.nbMaxDivision; i++) {
      filledData.push({
        "id": "superior"+i,
        "value" : 300,
        "color": "hsl(291, 70%, 50%)"
      });
    }
    this.setState({...this.state, data: filledData}, () => {
      console.log("data : " + JSON.stringify(this.state.data));
    });
  }


  render(){
    return (
      <div className="speed">
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
        colorBy="color"
        borderColor="inherit:darker(0.6)"
        enableRadialLabels={false}
        enableSlicesLabels={false}
        isInteractive={false}
        animate={false}
    />
      </div>
    )}
}
