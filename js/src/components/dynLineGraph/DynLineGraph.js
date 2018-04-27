import React, {Component} from "react"
import "./DynLineGraph.css"
import { ResponsiveLine } from '@nivo/line'


const theme = {
  axis: {
    textColor: "hsl(41, 100%, 40%)",
    fontSize: '14px',
    tickColor: "hsl(41, 100%, 40%)",
  },
  grid: {
    stroke: '#888',
    strokeWidth: 1
  },

};

const dataSet = () => ([
  {
    "id" : "data0",
    "data" : Array(20).fill(1).map((value, index) => ({
      x : index,
      y : 0
    }))
  }
])

export class DynLineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet : dataSet(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    )
  }

  componentWillUnmont() {
    clearInterval(this.timerID)
  }

  tick(){
    this.setState(this.refreshData)
  }

  refreshData (prevState, props) {
    const date = new Date()
    const newData = prevState.dataSet[0].data
    newData.shift()
    newData.push({
      x : date.toLocaleTimeString(),
      y : props.data
    })
    return {
      ...prevState,
      dataSet : [
        {
          ...dataSet[0],
          data : newData
        }
      ],
    }
  }

  render () {
    return (
      <div className="dyn-line-graph">
        <ResponsiveLine
          keys={["data0"]}
          data= {this.state.dataSet}
          curve="monotoneX"
          minY={0}
          mmaxY={250}
          width={600}
          colors="hsl(41, 100%, 50%)"
          lineWidth={1}
          enableDots={false}
          height={400}
          enableGridX={false}
          enableGridY={false}
          margin={{top:60, right:80, bottom:60, left:80}}
          offsetType="expand"
          padding={0.2}
          theme={theme}
          animate={false}
          axisBottom = {false}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": this.props.unit,
              "legendOffset": -40,
              "legendPosition": "center"
          }}
        />

      </div>
    )
  }
}
