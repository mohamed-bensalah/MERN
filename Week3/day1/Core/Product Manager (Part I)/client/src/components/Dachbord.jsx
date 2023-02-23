import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dachbord = (props) => {

    const [Products,setProducts]=useState([])
    const {refresh, refreshed}=props

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(Response=>{
          console.log(Response.data);
          setProducts(Response.data)})
        .catch(err =>console.log(err))
    },[refreshed])

      const deleteHandler =(id)=>{
        axios.delete("http://localhost:8000/api/deleteProduct/"+id)
        .then(Response=>{refresh()})
        .catch(err =>console.log(err))
      }

      

 
    return (
    <>
  <h1>Dachbor</h1>
  <hr/>
    {
      Products.map((Product,index)=>{
        return <div>
          <Link to={"/products/"+Product._id}>
          <h3>{Product.title}</h3>
          <p>{Product._id}</p>
          <h3>{Product.price}</h3>
          <h3>{Product.description}</h3>
          </Link>
          <button class="btn" onClick={(e)=>deleteHandler(Product._id)}>Delete product</button>
          <hr/>
        </div>
      })
    }






    </>
  )
}

export default Dachbord;