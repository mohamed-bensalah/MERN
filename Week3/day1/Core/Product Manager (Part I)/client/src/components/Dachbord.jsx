import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dachbord = () => {

    const [Products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(Response=>{
          console.log(Response.data);
          setProducts(Response.data)})
        .catch(err =>console.log(err))
    },[])

    return (
    <>
  <h1>Dachbor</h1>
  <hr/>
    {
      Products.map((Product,index)=>{
        return <div>
          <Link to={"/api/products/"+Product._id}>
          <h3>{Product.title}</h3>
          </Link>
          <h3>{Product.price}</h3>
          <h3>{Product.description}</h3>
          <hr/>
        </div>
      })
    }






    </>
  )
}

export default Dachbord;