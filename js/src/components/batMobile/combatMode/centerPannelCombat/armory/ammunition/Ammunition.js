import React, {Component} from "react"
import "./Ammunition.css"
import { ResponsiveBar } from '@nivo/bar'
import axios from 'axios'


export default class Ammunition extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
    }

    componentDidUpdate(prevProps, prevState){
      if(this.props !== prevProps){
        this.buildData();
      }
    }

    buildData(){
      var i;
      const filledData = Array(0);
        filledData.push({
          "type": "munitions",
          "filled": this.props.quantity,
          "filledColor": "rgba(238,203,18,0.88)",
          "empty": 100 -  this.props.quantity,
          "emptyColor": "hsl(190, 20%, 20%)"
        });
        this.setState({...this.state, data: filledData}, () => {
          //console.log("ARME : " + JSON.stringify(this.state.data));
          //console.log("max : " +  this.props.maxAmmunition);
        });
    }



    render() {
        return (
            <div className="ammunition">
              <div className= "row justify-content-center bar-graph">
                  <ResponsiveBar className = "d-flex"
                      //width={300}
                      //height={80}
                      data={this.state.data}
                      keys={[
                          "filled",
                          "empty"
                      ]}
                      indexBy="type"
                      minValue={0}
                      maxValue={100}
                      padding={0.3}
                      layout="horizontal"
                      colors="nivo"
                      colorBy={function(e){var t=e.id;return e.data[t+"Color"]}}
                      margin={{
                        "top": 10,
                        "right": 10,
                        "bottom": 10,
                        "left": 10
                      }}
                      borderColor="inherit:darker(1.6)"
                      enableGridY={false}
                      enableLabel={false}
                      animate={false}
                      isInteractive={false}
                    />
                    <span className="col-12 text-center" id={"ammunition-graph"}>quantity : {this.props.quantity} %</span>
                </div>
                <div className="row">
                <button onClick={()=>this.props.fire()}>fire </button>
                <button onClick={()=>this.props.recharge()}>reload </button>
                </div>
            </div>
        )
    }
}
