import React, { Component } from "react"

class ClassComp extends Component{

    constructor(){
        super()
        this.state={
            company:"Changepond",
            salary:85000
        }
    }

    render(){
        const {company,salary}=this.state;//destructuring of state
        const {myName,post}=this.props
        return <div><h2>This is Class Component</h2>
        
        <p>I am {myName},I am {post}</p>
        <p>Company name is : {company},my salary is : {salary}</p>
        </div>
    }

}

export default ClassComp;