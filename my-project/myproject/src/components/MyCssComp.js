import React from 'react'
import staticData from "../shared/constant/constantData"
import "./external.css"
import mymodule from "./mymodule.module.css"

const MyCssComp = () => {

    const txtObj ={
        color:false?"green":"red",
        fontSize:true?"20px":"30px",
        backgroundColor:"pink"
    }
    
    return (
        <React.Fragment>
            {/* use of internal css */}
            <h2 style={{color:"blue",backgroundColor:"aqua"}}>This is my Css components 
            </h2>
            <p style={txtObj}>hi how are you all</p>
            <img className='imgProp' src={staticData.odd4} alt='img'/>

            <br/>
            <img src={staticData.even3} className={mymodule.box} alt="even3"/>
        </React.Fragment>
    )
}

export default MyCssComp