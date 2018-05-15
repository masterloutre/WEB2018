import React, {Component} from "react"
import "./RevolutionPerMinute.css"
import axios from 'axios'
import { Pie } from '@nivo/pie'


export default class RevolutionPerMinute extends Component {

    constructor() {
        super();
        this.state = {
          speed: 0,
          nbMaxDivision: 10,
          nbMaxDivisionFilled: 8,
          wheelsize: 0.5,
          data: []
        };
    }

    componentDidUpdate(prevProps, prevState){
      //console.log("speed did componentDidUpdate : speed = " + this.props.speed)
      if(this.props.speed !== prevProps.speed){
        this.buildData();
      }
    }

    buildData(){
      var seuil = this.props.speed / 60.0 / this.state.wheelsize;
      var i;
      const filledData = Array(0);
        for (i = 0; i < seuil; i++) {
          filledData.push({
            "id": "inferior"+i,
            "value" : 200,
            //"color": "hsl(195, 50%, 50%)"
              "color":"rgba(238,203,18,0.88)"
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
            "color": "hsla(195, 50%, 50%, 0.0)"
          });
        }
        this.setState({...this.state, data: filledData}, () => {
          //console.log("data : " + JSON.stringify(this.state.data));
        });
    }



    render(){
      return (
        <div className="speed container-fluid">
          <div className="row w-100 justify-content-center align-items-center">
              <h2>1/min x 1000</h2>
          </div>
          <div className="row w-100 justify-content-center align-items-center">
              <Pie
                   width={350}
                   height={350}
                  data={this.state.data}
                  innerRadius={0.7}
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
        </div>
      )}
}
