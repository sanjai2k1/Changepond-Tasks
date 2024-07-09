import React from 'react'
import staticData from '../shared/constant/constantData'
const PageNotFound = () => {
  return (
    <div>
        <h1 style={{color:"red",textAlign:"center"}}>404..</h1>
        <p style={{color:"green",textAlign:"center"}}>Try another route...</p>
        <img src={staticData.notfound} alt="not found" height={"600px"} width={"100%"}/>

    </div>
  )
}

export default PageNotFound