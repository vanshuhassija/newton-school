import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {time: new Date().toLocaleTimeString()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }
  tick() {
    this.setState({time: new Date().toLocaleTimeString()});
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
        <div className='Clock'> <h3 id='time'>{this.state.time}</h3> </div>
    )
  }
}
