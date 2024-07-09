import React, { Component } from 'react'
import staticData from '../shared/constant/constantData'
export class MyImagesComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div><h2>This is MyImages Component</h2>

                <img src={staticData.odd1} alt='pic1' height="200px" width="200px" />
                <hr/>
                <img src={staticData.odd2} alt='pic2' height="200px" width="200px" />
                <hr/>
                <video src={staticData.video} controls/>
                <hr/>
                <audio src={staticData.audio} controls></audio>
            </div>
        )
    }
}

export default MyImagesComp