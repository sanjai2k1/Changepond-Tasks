import React, { Component } from 'react'
import { HOCComp } from './HOCComp'

 class HoverCounterComp extends Component {
 
  
    render() {
    return <div>
        <p>count is {this.props.count}</p>
        <h2 onMouseOver={()=>this.props.increment()}>Hover on Me to Increment</h2>


      </div>
    
  }
}

export default HOCComp(HoverCounterComp)