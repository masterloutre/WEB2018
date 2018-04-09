import React, {Component} from "react"
import "./Home.css"
import { Bar } from '@nivo/bar'
import axios from 'axios'

//Always start component names with a capital letter !!!!
export default class Home extends Component {
  constructor() {
    super(); //pass props from the parent on the child
    this.state = {}; //initial state = empty object
  }

  //In the method name : will means before it happens, did means after
  componentWillMount(){
     axios.get("/")
    .then((results) => {//the request is returned in json with axios
      console.log(results.data) //the data of the request
      this.setState({
        data : results.data.phrase
      })
      console.log(this.state.data);
    })
  }

  render(){
    return (
      <div className="home">
        {this.state.data}
        <Bar
          width={600}
          height={400}
          margin={{top:60, right:80, bottom:60, left:80}}
          data={[
           {name:'batman',
             strenght:100,
             charisma:50
           },
           {name:'the joker',
             strenght:20,
             charisma:100
           }
          ]}
          indexBy="name"
          keys={["strenght", "charisma"]}
          padding={0.2}
          labelTextColor="inherit:darker(1.4)"
          labelSkipWidth={16}
          labelSkipHeight={16}
        />
      </div>

    )
  }

}
