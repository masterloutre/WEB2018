import React, {Component} from "react"
import styles from "./Speed.css"
import { Pie } from '@nivo/pie'

export default class Speed extends Component {

  constructor() {
    super();
    this.state = {
      speed: 0,
      nbMaxDivision: 37,
      nbMaxDivisionFilled: 35,
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
    var seuil = Math.round(this.props.speed * this.state.nbMaxDivisionFilled / this.props.speedMax);
    var i;
    console.log("seuil  " + seuil);
    const filledData = Array(0);
    if(seuil < this.state.nbMaxDivision-1){
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
          "color": "hsla(195, 50%, 50%, 0.0)"
        });
      }
      this.setState({...this.state, data: filledData}, () => {
        //console.log("data : " + JSON.stringify(this.state.data));
      });
    }
  }



  render(){
    return (
      <div className="speed container-fluid">
        <div className="row w-100 justify-content-center align-items-center">
            <h2>{this.props.speed} KM/H</h2>
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
