import { Component } from 'react'
import React from 'react'
import TemperatureInput from './temperature-input'
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水开了！</p>
  } else {
    return <p>水还没有开！</p>
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat (temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round (output * 1000) /1000
  return rounded.toString()
}
 class Calculator extends Component {
   constructor(props) {
     super(props)
     this.state ={
       temperature:'',
       scale :'c'
     }
     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
     this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
   }
   handleFahrenheitChange(temperature){
    this.setState({
      temperature,
      scale:'f'
    })
   }
   handleCelsiusChange(temperature){
    this.setState({
      temperature,
      scale:'c'
    })
   }
   render() {
     const scale = this.state.scale
     const temperature = this.state.temperature
     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
     return (
        // <fieldset>
        //   <legend>输入温度</legend>
        //   <input
        //     value = {temperature}
        //     onChange = {this.handleChange}
        //   />
        //   <BoilingVerdict
        //     celsius={parseFloat(temperature)}
        //   />
        // </fieldset>
       <div>
          <TemperatureInput
          scale='c'
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}
          />
          <TemperatureInput
          scale='f'
          temperature = {fahrenheit}
          onTemperatureChange = {this.handleFahrenheitChange}
          />

          <BoilingVerdict
          celsius={parseFloat(celsius)} />
       </div>
     )
   }
 }

 export default Calculator
