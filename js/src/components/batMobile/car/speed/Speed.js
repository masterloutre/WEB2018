import React, {Component} from "react"
import "./Speed.css"
import { Pie } from '@nivo/pie'

export default class Speed extends Component {

  constructor() {
    super();
    this.state = {
      speed: 0,
      nbMaxDivision: 10,
      data: {}
    };
  }


  render(){
    console.log(this.props.speed);
    return (
      <div className="speed">
         <Pie
         width={400}
         height={400}
        data={[{
          "id": "inferior",
          "value" : 200,
          "color": "hsl(197, 70%, 50%)"
        },
        {
          "id": "inferior2",
          "value" : 30,
          "color": "hsl(197, 70%, 50%)"
        },
        {
          "id": "superior",
          "value" : 300,
          "color": "hsl(291, 70%, 50%)"
        }]}
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
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
      </div>
    )}
}
