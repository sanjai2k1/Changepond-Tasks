import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const [count,setCount] = useState(-1)
  const [salary,setSalary]=useState(1000)
  useEffect(()=>{

    setCount(count+1)
  },[salary])
  return (
    <div>
      
      <h2>UseEffectHook</h2>


<h1>count is {count}</h1>
<p>salary : {salary}</p>
      <button type='button' onClick={()=>setSalary(salary+1000)}>Salary</button>
    
    </div>
  )
}

export default UseEffectHook