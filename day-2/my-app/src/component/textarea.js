import { Component } from 'react'
import React from 'react'

class Textarea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value:'请撰写一篇关于你喜欢的元素的文章.'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    alert("提交的名字"+this.state.value.toUpperCase())
    e.preventDefault()
  }
  handleChange(e) {
    this.setState({
      value:e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        文章:
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="提交" />
    </form>
    )
  }
}

export default Textarea
