import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ()=>{
    const [heroNum,setHeroNum]=useState(1)
    const navigate = useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(heroNum)
        navigate("/hero/"+heroNum)



    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter your hero number</label>
                <input type="number" onChange={(e)=>{setHeroNum(e.target.value)}} />
                <input type="submit"/>
            </form>
        </div>
    )
}





export default Form







