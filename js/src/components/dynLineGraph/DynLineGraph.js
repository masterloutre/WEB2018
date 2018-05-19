import React, {Component} from "react"
import "./DynLineGraph.css"
import { ResponsiveLine } from '@nivo/line'

const mainColor= 'rgba(125, 174, 205, 1)'
const secondaryColor='rgba(26, 94, 110, 0.85)'
const theme = {
    axis: {
        filter: 'url(#glow)',
        textColor: 'transparent',
        fontSize: '11px',
        tickColor: mainColor,
        legendColor: secondaryColor,
        legendFontSize: '9px',
    },
    grid: {
        stroke: '#ddd',
        strokeWidth: 1,
        strokeDasharray: '',
    },
    markers: {
        filter: 'url(#glow)',
        lineColor: mainColor,
        lineStrokeWidth: 0.5,
        textColor: mainColor,
        fontSize: '11px',
    },
    dots: {
        textColor: mainColor,
        fontSize: '11px',
    },
    tooltip: {
        container: {
            background: 'white',
            color: 'inherit',
            fontSize: 'inherit',
            borderRadius: '2px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
            padding: '5px 9px',
        },
        basic: {
            whiteSpace: 'pre',
            display: 'flex',
            alignItems: 'center',
        },
        table: {},
        tableCell: {
            padding: '3px 5px',
        },
    },
    labels: {
        textColor: mainColor,
    },
    sankey: {
        label: {},
    },
};

const dataSet = () => (Array(200).fill(1).map((item) => (
        {
            x: "0",
            y: 0
        }
    ))
)

export class DynLineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : dataSet(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick(){
    if(this.props.refresh)
      this.setState(this.refreshData)
    else
      this.setState(this.addData)
  }

  refreshData (prevState, props) //efface au fur et à mesure
  {
      const date = new Date()
      const newData = prevState.data
      newData.shift()
      newData.push({
          x : date.toLocaleTimeString(),
          y : props.data
      })
      return {
          data : newData
      }
  }

  addData(prevState, props) //garde tout l'historique
  {
      const date = new Date()
      const newData = prevState.data
      newData.push({
          x : date.toLocaleTimeString(),
          y : props.data
      })
      return {
          data : newData
      }
  }

  render () {
    return (
      <div className="dyn-line-graph">

        <ResponsiveLine className = "d-flex"
          keys={["key1"]}
          data= {[
              {
                  id : "key1",
                  data : this.state.data
              }
          ]}
          curve="monotoneX"
          minY={0}
          mmaxY={250}
          colors= {mainColor}
          lineWidth={1}
          enableDots={false}
          enableGridX={false}
          enableGridY={false}
          margin={{top:10, right:10, bottom:10, left:20}}
          offsetType="expand"
          padding={0.2}
          theme={theme}
          animate={false}
          axisBottom = {
              {
                  "orient": "bottom",
                  "tickSize": 0,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "format": () => null,
              }
          }
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": this.props.unit,
              "legendOffset": -10,
              "legendPosition": "center"
          }}
        />

      </div>
    )
  }
}
