import { Component } from 'react'
import React from 'react';

class Form extends Component {
  constructor (props) {
    super (props)
    this.state  = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    console.log(e.target.value);
    const { value } = e.target
    this.setState({value})
  }
  handleSubmit(e) {
    console.log(this.state.value);
    alert("提交的名字"+this.state.value.toUpperCase())
    e.preventDefault()
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value='提交'/>

      </form>
    )
  }
}

export default Form
