import React, { Component } from "react";

class MethodEventComp extends Component{

    greeting=()=>{
        window.alert("Good Afternoon my dear friends")
    }

    welcome =(...std)=>{
        window.alert(`Welcome you ${std}`)
    }
    render(){
        return <div>
            <h2>This is method Event Component</h2>
            <button type="button" onClick={this.greeting}>greeting</button>
            <button type="button" onClick={()=>this.welcome("kamlesh")}>Welcome</button>
            <h2 onMouseOver={this.greeting}>Hover on me To call greeting method</h2>
        </div>
    }
}


export default MethodEventComp;