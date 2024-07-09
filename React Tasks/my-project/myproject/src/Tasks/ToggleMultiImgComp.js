
import staticData from "../shared/constant/constantData"
import React, { Component } from 'react'
const multiImages = [staticData.even1, staticData.even2, staticData.even3, staticData.even4, staticData.even5]







export default class ToggleMultiImgComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imgSrc: multiImages[0]
        }
    }

    clicked = (e) => {

        this.setState((prev) => ({ imgSrc: multiImages[e.target.value] }))
    }


    render() {
        return (
            <div>


                <div>
                    <img src={this.state.imgSrc} alt="img" height="400px" width="400px" />
                    <br />
                    <button type='button' value="0" onClick={(e) => this.clicked(e)} >Fox</button>
                    <button type='button' value="1" onClick={(e) => this.clicked(e)}>Dolphin</button>
                    <button type='button' value="2" onClick={(e) => this.clicked(e)}>Ostrich</button>
                    <button type='button' value="3" onClick={(e) => this.clicked(e)}>Giraffee</button>
                    <button type='button' value="4" onClick={(e) => this.clicked(e)}>Kangaroo</button>
                </div>


            </div>
        )
    }
}
