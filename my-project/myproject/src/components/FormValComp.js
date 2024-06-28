import React, { useState } from 'react'

const FormValComp = () => {

    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const [checked,setChecked]=useState(false)
    const inputhandler=(event)=>{
        const {name,value}= event.target
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const checkData=(event)=>{
        
        event.preventDefault()
    let fname_regex = "^[a-zA-Z]{3,15}$"
    let password_regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    if(user.username.trim()===""){
      window.alert("user name field is required")
      return false;
    }
    if(!user.username.trim().match(fname_regex)){
      window.alert("enter range 3-15")
      return false;
    }
    if(user.password.trim()===""){
      window.alert("password field is required")
      return false;
    }
    if(!user.password.trim().match(password_regex)){
      window.alert("password is incorrect")
      return false;
    }
   
   
  
    }
  return (
    <div>
        <h2>This is form validation Component</h2>
        <form onSubmit={checkData}>
            <label htmlFor="username">Enter User Name</label>
            <input type='text' name='username' value={user.name} onChange={inputhandler}/>
            <br/>
            <label htmlFor="password">Enter Password</label>
            <input type='text' name='password' value={user.password} onChange={inputhandler} />
            <br/>
            <input type='checkbox' onChange={()=>setChecked((prev)=>(prev? false :true))}/> accept terms and conditions
            <br/>
            <input type='submit' className='btn btn-primary'  value={"submit"} disabled={!checked && !user.username!=="" && !user.password!=""}/>
        </form>

    </div>
  )
}

export default FormValComp