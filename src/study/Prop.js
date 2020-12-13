import React from "react";
import Potato from "./Potato";	

// function Food({ favourite }) {
//   return <h1>I like {favourite}</h1>;
// }


function Food( smt ) {
    // console.log(this.props)
    console.log(smt)
    console.log(smt.favourite)
    console.log(smt.somthing)
    return <h1>I like {smt.favourite}</h1>;
  }

// function Potato(){
//     return <h1>dis</h1>
// }

function Prop() {	
  return (	  
    
    <div>	    
      <h1>Hello</h1>	      
      <Potato favourite="df"/>
      <Food favourite="kimchi" /> 
      <Food favourite="ramen" />
      <Food favourite="samgiopsal" />
      <Food favourite="chukumi"  somthing={true} oaoaoaooa={["hello",1,2,3,4,true]}
      />
      
    </div>	    	  
  );
}	

export default Prop;