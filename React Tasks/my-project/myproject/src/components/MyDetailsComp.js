

import React, { Component } from "react";

class MyDetailsComp extends Component {

    constructor() {
        super()
        this.state = {
            gender: "Male",
            martial_status: "Single",
            address: "chennai"

        }
    }

    render() {
        const { fname, lname, email, contact } = this.props
        const { gender, martial_status, address } = this.state

        return <div>

            <p>fname : {fname}</p>
            <p>lname : {lname}</p>
            <p>email : {email}</p>
            <p>contact : {contact}</p>
            <p>gender : {gender}</p>
            <p>martial_status : {martial_status}</p>
            <p>address : {address}</p>





        </div>
    }



}

export default MyDetailsComp