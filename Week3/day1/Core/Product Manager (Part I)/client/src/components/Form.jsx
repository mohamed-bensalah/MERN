import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [title,setTitel]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    
    const submitHandler=(e)=>{
        e.preventDefault()
            const newProduct ={
                title,
                price,
                description
            }
            axios.post("http://localhost:8000/api/products",newProduct)
            .then(res=>{
                console.log(res);
                
            })
            .catch(err=>console.log(err))}
            return (
              <>
              <h1>Form</h1>
                <form onSubmit={submitHandler}>
                    <label>Title :</label>
                    <input type="string" onChange={e=>{setTitel(e.target.value)}}/><br/>
                    <label>Price :</label>
                    <input type="number" onChange={e=>{setPrice(e.target.value)}}/><br/>
                    <label>description :</label>
                    <input type="string" onChange={e=>{setDescription(e.target.value)}}/><br/>
                    <input type="Submit" value="Add new product"/>
                </form>
              </>
            )
          }
          
          export default Form
