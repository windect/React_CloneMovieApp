import React from "react";

class ComponentLife extends React.Component{

    constructor(props){
        super(props);
        console.log("hello");
    }
    state ={
        count:0
    };
    add=()=>{
        this.setState(current=>({count:current.count+1}));
    };
    minus=()=>{
        this.setState(current => ({count:current.count-1}));
    }

    componentDidMount(){
        console.log("component rended");
    }
    componentDidUpdate(){
        console.log("I just update")
    }
    componentWillUnmount(){
        console.log("goobye")
    }
    render(){
        console.log("render");
        return(
            <div>
                {console.log("dkd")}
                <h1>im a count {this.state.count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

export default ComponentLife;