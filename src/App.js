import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import './App.css'
import Task from './component/Task'

export default class App extends Component {
  state = {
  
    person:{
    fullname: "fedi abdelmalaK",
    bio: "React is easy and hard",
    imgSrc: "http://yunika9497.weebly.com/uploads/6/1/0/5/61058845/9922578_orig.jpg",
    profession: "web developpers",
  },
  showMe: true
  
}
 
derementprofession=()=>this.setState({profession: this.state.person.profession})
derementimg=()=>this. setState({imgSrc: this.state.person.imgSrc})
derementbio=()=>this.setState({bio: this.state.person.bio})
name=()=>this.setState({fullname: this.state.person.fullname})
handleShow=()=>this.setState({showMe:!this.state.showMe})

  render() {
    console.log(this.state)
    return (
      <div className='App'>
        {
          this.state.showMe && <div className='app'>
           <img src={this.state.person.imgSrc} alt="" />
           <h2>{this.state.person.fullname}</h2>
           <h2>{this.state.person.bio}</h2>
           <h2>{this.state.person.profession}</h2>
          </div>
        }
        <button onClick={this.handleShow} >Go to show</button>
        <Task onClick={this.state.showMe} />
      </div>

    )
  }
}

