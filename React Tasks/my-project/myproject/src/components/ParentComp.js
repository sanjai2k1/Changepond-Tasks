import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        empName:"Sanjai",
        empSalary:85000
         
      }
    }
    changeData=()=>{
        this.setState((prevState)=>({empSalary:prevState.empSalary+1000,empName:"sanjai J"}))
    }
  render() {
    const {empName,empSalary}=this.state
    return (
      <div>
        <h2>This is Parent Component</h2>
        <p>Employee name is : <strong>{empName}</strong></p>
        <p>Employee salary is : <strong>{empSalary}</strong></p>
        <button type='button' onClick={()=>this.changeData()}>Change state data</button>
        <hr/>

        <ChildComp name={empName} salary={empSalary} changeData={this.changeData}/>
      </div>
    )
  }
}

export default ParentComp