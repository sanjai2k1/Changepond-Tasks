import React, { Component } from "react";

class SetStateComp extends Component{


    constructor(props){
        super()
        this.state={
            count:0,
            name:"sanjai"
        }
    }

    counterInc = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    counterDec = ()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }
    changeName=()=>{
        this.setState((prevState)=>({...prevState,name:"sanjai J"}))
    }
    render(){
        return<div>
            <h2>This is set State</h2>
            <p>This is {this.state.name}</p>
            <p>Count value is <strong>{this.state.count}</strong></p>
            <button type="button" onClick={()=>this.counterInc()}>count++</button>
            <button type="button" onClick={()=>this.counterDec()}>count--</button>
            <button type="button" onClick={()=>this.changeName()}>change Name</button>
        </div>
    }
}


export default SetStateComp;