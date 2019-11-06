import { Component } from 'react'
import React from 'react';

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers : props.numbers
    }
  }

  componentDidMount(){
        console.log(this.state.numbers);
  }
  render () {
    return (
      <div >
        <ul>{this.state.numbers.map((number,index) =>
          <li key={number}>{number} + {index}</li>
            )}
        </ul>
      </div>
    )
  }

}

export default List
