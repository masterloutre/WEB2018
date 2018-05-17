import React, {Component} from "react"
import "./GraphsLeft.css"
import axios from 'axios'
import { Bar } from '@nivo/bar'
import {DynLineGraph} from "../../../dynLineGraph/DynLineGraph";


export default class GraphsLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="graphsLeft row justify-content-center">
                <div className="col-7 p-2 offset-3">
                    <span> Mileage : {this.props.mileage} Km </span>
                    <Bar
                    width={400}
                    height={400}
                      data={[
                        {
                          "type": "battery",
                          "filled": 35,
                          "filledColor": "rgba(238,203,18,0.88)",
                          "empty": 78,
                          "emptyColor": "hsl(190, 20%, 20%)"
                        },
                        {
                          "type": "oil",
                          "filled": 14,
                          "filledColor": "rgba(238,203,18,0.88)",
                          "empty": 78,
                          "emptyColor": "hsl(190, 20%, 20%)"
                        }
                      ]}
                      keys={[
                          "filled",
                          "empty"
                      ]}
                      indexBy="type"
                      minValue={0}
                      maxValue={5}
                      margin={{
                          "top": 50,
                          "right": 130,
                          "bottom": 50,
                          "left": 60
                      }}
                      padding={0.3}
                      colors="nivo"
                      colorBy={function(e){var t=e.id;return e.data[t+"Color"]}}
                      borderColor="inherit:darker(1.6)"
                      axisLeft={{
                          "orient": "left",
                          "tickSize": 5,
                          "tickPadding": 5,
                          "tickRotation": 0
                      }}
                      enableLabel={false}
                      animate={false}
                      isInteractive={false}
                      legends={[
                          {
                              "dataFrom": "keys",
                              "anchor": "bottom-right",
                              "direction": "column",
                              "translateX": 120,
                              "itemWidth": 100,
                              "itemHeight": 20,
                              "itemsSpacing": 2,
                              "symbolSize": 20
                          }
                      ]}
                  />
                </div>
            </div>
        )
    }
}
