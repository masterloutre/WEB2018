import React, {Component} from "react"
import "./Home.css"

//Always start component names with a capital letter !!!!
export default class Home extends Component {
  constructor() {
    super(); //pass props from the parent on the child
    this.state = {}; //initial state = empty object
  }

  //In the method name : will means before it happens, did means after
  componentWillMount(){
    //fetch('https://randomuser.me/api/') // temporary address
    fetch("/src/php/public")
    .then((results) => {//how we want the data to be returned
      //let json = results.json()
      console.log( results.json())
      //return json
    })
  /*  .then(json => {
      this.setState({
        data : json
      })
      console.log(this.state);
    })*/
  }

  render(){
    return (
      <div className="home">
        {this.state.data}
      </div>
    )
  }

}
