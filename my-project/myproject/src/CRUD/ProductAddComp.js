import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAddComp = () => {

    const [product,setProduct]=useState({
        product_name:"",
        price:0,
        companay:""
    })
    const navigate = useNavigate()
    const handleChange =(event)=>{
        const {name,value}=event.target
        
        setProduct((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log(product)
        let fname_regex = "^[a-zA-Z]{3,15}$"
        if(product.product_name.trim()===""){
            window.alert("name field is required")
            return false;
          }
          if(!product.product_name.trim().match(fname_regex)){
            window.alert("enter range 3-15")
            return false;
          }
          if(!product.price){
            window.alert("price is required")
            return false;
          }
          if(product.companay.trim()===""){
            window.alert("name field is required")
            return false;
          }
          if(!product.companay.trim().match(fname_regex)){
            window.alert("enter range 3-15")
            return false;
          }

       
  
            axios.post('http://localhost:8888/product',product).then((res)=>(console.log(res)))
            navigate("/maindashboard/productdash")
            }
  return (
    <div>
        <h2>This is product Add component</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='product_name'>Product Name</label>
            <input type='text' name='product_name' onChange={handleChange}/>
            <br/>
            <label htmlFor='price'>Product Price</label>
            <input type='number' name='price'onChange={handleChange}/>
            <br/>
            <label htmlFor='companay'>Product Company</label>
            <input type='text' name='companay' onChange={handleChange}/>
            <br/>
            <input type='submit' value={"Add"}/>
        </form>
    </div>
  )
}

export default ProductAddComp