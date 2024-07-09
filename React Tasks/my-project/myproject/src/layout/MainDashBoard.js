import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from './FooterComp'

const MainDashBoard = () => {
  return (<div className="container">
    <div className='card border-primary'>
        <div className='card-header'>
            <NavComp/>
        </div>
        <div className='card-body border-primary '>
            
            <Outlet/>
        </div>
        <div className='card-footer'>
            <FooterComp/>
        </div>
        </div>   
    </div>
  )
}

export default MainDashBoard