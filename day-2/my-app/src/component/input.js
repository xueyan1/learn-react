import { Component } from 'react'
import React from 'react'
// 处理多个输入框
class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
     isGoing : true,
     numberOfGuests : 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    alert("参与的"+this.state.isGoing+'人数'+this.state.numberOfGuests)
    e.preventDefault()
  }
  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked:target.value
    const name = target.name
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        参与:
        <input
        name = 'isGoing'
        type="checkbox"
        checked={this.state.isGoing}
        onChange = {this.handleInputChange}
        />
        <br/>
        </label>
        <label>
        来宾人数:
        <input
        name = 'numberOfGuests'
        type="number"
        value={this.state.numberOfGuests}
        onChange = {this.handleInputChange}
        />
        <br/>
        </label>
      <input type="submit" value="提交" />
    </form>
    )
  }
}

export default Input
