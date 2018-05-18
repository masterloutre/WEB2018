import React, {Component} from "react"
import "./GraphsLeft.css"
import axios from 'axios'
import { Bar } from '@nivo/bar'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";


export default class GraphsLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }

    componentDidUpdate(prevProps, prevState){
      //console.log("speed did componentDidUpdate : speed = " + this.props.speed)
      if(this.props !== prevProps){
        this.buildData();
      }
    }

    buildData(){
      var i;
      const filledData = Array(0);
        filledData.push({
          "type": "battery",
          "filled": this.props.battery/100.0,
          "filledColor": "rgba(238,203,18,0.88)",
          "empty": 1-this.props.battery/100.0,
          "emptyColor": "hsl(190, 20%, 20%)"
        });
        filledData.push({
          "type": "oilLevel",
          "filled": this.props.oilLevel/100.0,
          "filledColor": "rgba(238,203,18,0.88)",
          "empty": 1-this.props.oilLevel/100.0,
          "emptyColor": "hsl(190, 20%, 20%)"
        });
        filledData.push({
          "type": "liquidLevel",
          "filled": this.props.liquidLevel/100.0,
          "filledColor": "rgba(238,203,18,0.88)",
          "empty": 1-this.props.liquidLevel/100.0,
          "emptyColor": "hsl(190, 20%, 20%)"
        });
        this.setState({...this.state, data: filledData}, () => {
          //console.log("data : " + JSON.stringify(this.state.data));
        });
    }



    render() {
        return (
            <div className="graphsLeft row justify-content-center">
                <div className="col-7 p-2 offset-1">
                    <span> Mileage : {this.props.mileage} Km </span>
                    <Bar
                    width={100}
                    height={80}
                    data={this.state.data}
                    keys={[
                        "filled",
                        "empty"
                    ]}
                    indexBy="type"
                    minValue={0}
                    maxValue={1}
                    padding={0.3}
                    colors="nivo"
                    colorBy={function(e){var t=e.id;return e.data[t+"Color"]}}
                    borderColor="inherit:darker(1.6)"
                    enableLabel={false}
                    animate={false}
                    enableGridY={false}
                    isInteractive={false}
                  />
                </div>
            </div>
        )
    }
}
