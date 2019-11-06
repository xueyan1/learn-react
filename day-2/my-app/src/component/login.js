import { Component } from 'react'
import React from 'react';

function LoginButton(props) {
  return (
    <button style={{height:12+'rem', width:12+'rem',background:'red',fontSize:24+'px',color:'white'}} onClick={props.onClick}>
      登录
    </button>
  )
}
function LogoutButton(props) {
  return (
    <button style={{height:12+'rem', width:12+'rem',background:'rgba(0,0,0,0.4)',fontSize:24+'px',color:'#eee'}}onClick={props.onClick}>
      退出
    </button>
  )
}

class LoginControl extends Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn:true
    }
  }
  handleLoginClick() {
    this.setState({
      isLoggedIn:false
    })
  }
  handleLogoutClick() {
    this.setState({
      isLoggedIn:true
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button ;
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    } else {
      button = <LogoutButton onClick ={this.handleLogoutClick}></LogoutButton>
    }
    return (
      <div> {button} </div>
    )
  }
}

export default LoginControl
