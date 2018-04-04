import React, {Component} from "react"
import "./Home.css"
import axios from 'axios'
axios.defaults.baseURL = 'http://167.99.193.139/php/public/';

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
      </div>
    )
  }

}
