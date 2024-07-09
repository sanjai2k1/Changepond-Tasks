import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const ProductUpdateComp = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product,setProduct]=useState({
        product_name:"",
        price:0,
        companay:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8888/product/${id}`).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
            
    
        })
    },[])



    
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

         

          axios.put(`http://localhost:8888/product/${id}`,product).then((res)=>(console.log(res)))
          navigate('/maindashboard/productdash')
        
    }
  return (
    <div>
        <h2>This is product Update Comp</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='product_name'>Product Name</label>
            <input type='text' name='product_name' onChange={handleChange} value={product.product_name}/>
            <br/>
            <label htmlFor='price'>Product Price</label>
            <input type='number' name='price'onChange={handleChange}  value={product.price}/>
            <br/>
            <label htmlFor='companay'>Product Company</label>
            <input type='text' name='companay' onChange={handleChange}  value={product.companay}/>
            <br/>
            <input type='submit' value={"Update"}/>
        </form>
    </div>
  )
}

export default ProductUpdateComp