import React, { useState } from 'react'

const UseStateHooks = () => {
  const [count,setCount]=useState(0)

  return (
    <div>
      <h1>count is {count}</h1>
      <button type='button' onClick={()=>setCount(count+1)}>Count++</button>
    </div>
  )
}

export default UseStateHooks