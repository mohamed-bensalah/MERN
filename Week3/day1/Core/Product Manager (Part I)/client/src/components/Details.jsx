import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const[product,setProduct]=useState()
    const {id}=useParams
    console.log(id);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
        .catch((err=>console.log(err)))
    },[])




  return ( 
    <>
    <h1>one product</h1>
        {
            (product) ?
            <div>
            <h3>{product[0].title}</h3>
            <h3>{product[0].price}</h3>
            <h3>{product[0].description}</h3>
            <hr />
            </div>: null
           
        }
    </>
  )
}

export default Details