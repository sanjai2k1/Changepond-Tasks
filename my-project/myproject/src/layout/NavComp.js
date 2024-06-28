import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
        <Link to="myslider" className='btn btn-primary btn-sm me-2'>MySlider</Link>
        <Link to="myimages" className='btn btn-primary btn-sm me-2'>MyImages</Link>
        <Link to="parent" className='btn btn-primary btn-sm me-2'>Parent</Link>
        <Link to="reacthook" className='btn btn-primary btn-sm me-2'>Hooks</Link>
        <Link to="virtualdom" className='btn btn-primary btn-sm me-2'>VirtualDom</Link>
        <Link to="productdash" className='btn btn-primary btn-sm'>CRUD</Link>
    </div>
  )
}

export default NavComp