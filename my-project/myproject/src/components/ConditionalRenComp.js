import React, { Component } from "react";

class ConditionalRenComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isCondition: true
        }
    }




    render() {
        // let msg = ""
        // // use of if else
        // if(this.state.isCondition){
        //     msg="Admin Login Sucessfully"
        // }else{
        //     msg="User Login Succesfully"
        // }
        // return <h2>{msg}</h2>
        // return this.state.isCondition ? <h2>Admin Login Successfully</h2> : <h2>User Login Successfully</h2>
    //use of short circuit
    return this.state.isCondition && <h2>Admin Login</h2>
    }
}


export default ConditionalRenComp