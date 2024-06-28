import React, { Component } from 'react'
import staticData from '../shared/constant/constantData'
export default class ToggleImgComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         toggle:true
      }
    }
    toggleu = ()=>{
        this.setState((prev)=>({toggle:prev.toggle?false:true}))
    }
  render() {
    return (
      <div>

{this.state.toggle ? <img src={staticData.even2} alt='even2' height="300px" width="300px"/>:
<img src={staticData.even3} alt='even2' height="300px" width="300px"/>
}
<br/>

<button type='button' onClick={()=>this.toggleu()}>Toggle</button>
      </div>
    )
  }
}
