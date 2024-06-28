import React from 'react'
import { Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
const ReactHook = () => {
  return (
    <>
    <div>


    <div className='card-header'>
          
    <Link to="useeffect" className='btn btn-success btn-sm me-2'>useeffect</Link>
    <Link to="usestate" className='btn btn-info btn-sm me-2'>usestate</Link>

        </div>
        <div className='card-body border-primary '>
            
            <Outlet/>
        </div>
        <div className='card-footer'>
          <h2>This is Hooks Component</h2>
        </div>
       
  
    </div>
    </>
  )
}

export default ReactHook