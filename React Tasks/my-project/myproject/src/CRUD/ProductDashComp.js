import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, Outlet } from 'react-router-dom'
const ProductDashComp = () => {
    const [itemData, setItemData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8888/product').then((res) => {
            setItemData(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [itemData])

    const deleteProduct =(event)=>{
        const id = event.target.value
        
        if(window.confirm(`are you sure ..to delete id :${id}`)){
        axios.delete(`http://localhost:8888/product/${id}`)
        axios.get('http://localhost:8888/product').then((res) => {
            setItemData(res.data)
        }).catch((error) => {
            console.log(error)
        })
        window.alert("record deleted successfully..")
    }
    }
    return (
        <div>
            <h2>this is product Dashboard Component</h2>
            <button><Link to="/maindashboard/addproduct">ADD</Link></button>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        itemData.length > 0 && itemData.map((val, index) => (

                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{val.product_name}</td>
                                <td>{val.price}</td>
                                <td>{val.companay}</td>
                                <td>
                                    <button className='btn btn-success me-2'><Link to={`/maindashboard/updateproduct/${val.id}`} style={{display:"inherit",color: 'inherit', textDecoration: 'inherit'}}> EDIT</Link></button>
                                    <button className='btn btn-danger' onClick={deleteProduct} value={val.id}>DELETE</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
          
        </div>
    )
}

export default ProductDashComp