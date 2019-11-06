import { Component } from 'react'
import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

 class TemperatureInput extends Component {
   constructor(props) {
     super(props)
     this.handleChange = this.handleChange.bind(this)
   }
   handleChange(e){
    // this.setState({
    //   temperature : e.target.value
    // })
    // 状态提升为父组件的数据
    this.props.onTemperatureChange(e.target.value)
   }
   render() {
    //  const temperature = this.state.temperature
        const temperature = this.props.temperature // 开始状态提升

     const scale = this.props.scale
     return (
        <fieldset>
          <legend>输入温度 {scaleNames[scale]}</legend>
          <input
            value = {temperature}
            onChange = {this.handleChange}
          />
        </fieldset>
     )
   }
 }

 export default TemperatureInput
