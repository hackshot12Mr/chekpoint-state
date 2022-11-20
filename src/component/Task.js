import React, { Component } from 'react'

export default class Task extends Component {
  state={
    count:0 ,
    
  }
  increment=()=>this.setState({count:this.state.count+1})
  decrement=()=>this.setState({count:this.state.count-1})
  componentDidMount(){
    console.log("componentDidMoun")
    setInterval(this.increment, 1000);
  }
  // componentDidUpdate(){
  //   console.log("componentDidUpdate")
    
  // }
  // componentWillUnmount(){
  //   setInterval(this.increment, 1000);
  // }
  render() {
    return (
      <div>
        
        <h1>Time</h1>
        <h2>{this.state.count} seconde</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        
      </div>
    )
  }
}
