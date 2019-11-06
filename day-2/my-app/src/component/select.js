import { Component } from 'react'
import React from 'react';


class Select extends Component {
   constructor (props) {
     super(props)
     this.state = {
      value : 'coconut',
      multiple:true
     }
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
   }
   handleChange (e) {
      this.setState({
        value: e.target.value
      })
    }
    handleSubmit (e){
      alert('你喜欢的风味是: ' + this.state.value)
      e.preventDefault()
    }
    render() {

  return (

    <form onSubmit={this.handleSubmit}>

      <label>
        选择你喜欢的风味
      <select multiple value={['grapefruit','apple',]} onChange={this.handleChange}>
        <option value = 'grapefruit'>葡萄柚</option>
        <option value = 'apple'>苹果</option>
        <option value = 'lime'>酸橙</option>
        <option value = 'coconut'>椰子</option>
        <option value = 'mango'>芒果</option>
      </select>
      </label>
      <input type='submit' value = '提交'></input>
    </form>
  );
  }

}
export default Select
