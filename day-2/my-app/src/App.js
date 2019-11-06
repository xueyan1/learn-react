import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Click from './component/click'
// import LoginControl from './component/login'
// import List from './component/list'
import Form from './component/form'
import Textarea from './component/textarea'
import Select  from "./component/select";
import Input  from "./component/input";
import Calculator  from "./component/up-state";
import HookDemo from './component/hook'
// class Welcome extends React.Component {
//   render () {
//     return <h1>Hello, {this.props.firstName}</h1>;
//   }
// }

function App() {
  // function Welcome(props) {
  //   return <h1>Hello, {props.firstName}</h1>;
  // }


  // function formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }
  // function getGreeting(user) {
  //   if (user) {
  //     return <h1>Hello, {formatName(user)}!</h1>;
  //   }
  //   return <h1>Hello, Stranger.</h1>;
  // }
  // const user = {
  //   firstName: '薛',
  //   lastName: '严'
  // };

  return (
    <div className="App">
      {/* <img src={logo} style={{height:30+'rem', width:20+'rem'}} alt=''/>
     {getGreeting(user) }
     <Welcome firstName = "hehe"></Welcome>
     <Welcome firstName = "haha"></Welcome>
     <Welcome firstName = "hhaihai"></Welcome>
     <Welcome firstName = "heiwha"></Welcome>
     <div> {Welcome(user)} </div> */}
     {/* <Click/>
     <Click/>
     <Click/> */}
     {/* <LoginControl/>
     <List numbers= {[1,2,3,4,5]} /> */}
     <Form/>
     <Textarea />
     <Select/>
     <Input/>
     <Calculator />
     <HookDemo/>
    </div >
  )
}

export default App;
