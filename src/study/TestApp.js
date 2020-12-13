import React from "react";
// import PropTypes from "prop-types";
import Movieapp from './MovieApp';

class TestApp extends React.Component{
  constructor (props){
    // super(props);
    // var랑 const에 차이 let
      // var : 할당된 변수가 유동적으로 변경 가능 
      // 상수 : let(변수 재할당 가능) const(변수 재선언, 재할당 불가) 
    console.log("hello");
  }

  state = {
    ca:0
  };
  
  

  add = () =>{
    this.setState(a => ({count: this.state.count+ 1})) 
  };
  minus =()=>{
    this.setState(current=>({ca: current.ca - 1}))
    
  };

  componentDidMount(){
    console.log("component rended");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }
  render(){
    console.log("I'm rendering");

  return(
  <div>
    <h1>im a class number is {this.state.ca}component</h1>; 
    <button onClick={this.add}>add</button>
    <button onClick={this.minus}>Minus</button> 
    <Movieapp />
  </div>
  )  
  }
  
}

export default TestApp;
