import React, { Component } from 'react'

export default class VirtualDomComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       breakFast:[{id:1,name:"Poha"},{id:2,name:"Dosa"},{id:3,name:"Pongal"},{id:4,name:"Idly"}]
    }
  }
  render() {
    setTimeout(()=>{
      let findIndex = this.state.breakFast.findIndex((breakFast)=>breakFast.id===3)
      let find = this.state.breakFast.find((breakFast)=>breakFast.id===3)
      this.state.breakFast[findIndex].name="vada"
      console.log(find)
      
    },3000)
    
    
    return (
      <div>
        <h2>This is VirtualDom Component</h2>
        <ul>

          {this.state.breakFast.map((val,ind)=><li key={val.id}>{val.name}</li>)}
          
        </ul>
      </div>
    )
    
  }
  
  
}
