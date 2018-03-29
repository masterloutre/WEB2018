import React, {Component} from 'react';
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
    fetch('/')
    .then((results) => {//how we want the data to be returned
      let json = results.json();
      return json;
    })
    .then(json => {
      this.setState({
        title : json.results[0].name.title,
        first : json.results[0].name.first,
        last : json.results[0].name.last,
      });
      console.log(this.state);
    })
  }

  render(){
    return (
      <div className="home">
        {this.state.title}   {this.state.first}   {this.state.last}
      </div>
    )
  }

}
