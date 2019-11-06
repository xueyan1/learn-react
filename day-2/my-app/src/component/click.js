import React from 'react';

class Click extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date:new Date()
    }
  }
  componentDidMount () {
    this.timerID = setInterval(() => this.click(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  click () {
  this.setState({
    date:new Date()
  })
}

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Click
