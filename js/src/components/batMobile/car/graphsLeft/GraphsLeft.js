import React, {Component} from "react"
import "./GraphsLeft.css"
import axios from 'axios'
import { Bar } from '@nivo/bar'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";

const theme = {
    axis: {
        filter: 'url(#glow)',
        textColor: "rgba(238,203,18,0.88)",
        fontSize: '11px',
        tickColor: 'rgba(125, 174, 205, 1)',
        legendColor: "rgba(238,203,18,0.88)",
        legendFontSize: '9px',
    },
    markers: {
        filter: 'url(#glow)',
        lineColor: 'rgba(125, 174, 205, 1)',
        lineStrokeWidth: 0.5,
        textColor: 'rgba(125, 174, 205, 1)',
        fontSize: '11px',
    }
};

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
            <div className="graphsLeft row ">
                <div className="col-9 p-2">
                    <div className="row justify-content-center">
                      <span> Mileage : {this.props.mileage} Km </span>
                    </div>
                    <div className="row">
                        <Bar
                        width={300}
                        height={150}
                        data={this.state.data}
                        keys={[
                            "filled",
                            "empty"
                        ]}
                        indexBy="type"
                        minValue={0}
                        maxValue={1}
                        padding={0.3}
                        theme={theme}
                        layout="horizontal"
                        colors="nivo"
                        colorBy={function(e){var t=e.id;return e.data[t+"Color"]}}
                        margin={{
                          "top": 10,
                          "right": 10,
                          "bottom": 10,
                          "left": 70
                        }}
                        borderColor="inherit:darker(1.6)"
                        enableGridY={false}
                        enableLabel={false}
                        animate={false}
                        isInteractive={false}
                      />
                    </div>
                </div>
            </div>
        )
    }
}
