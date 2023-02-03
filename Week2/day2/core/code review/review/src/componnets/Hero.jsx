import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Hero = () => {

    const [hero,setHero] = useState(null)
    const {heroId}=useParams()
    const navigate=useNavigate()


    useEffect(()=>{
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
        .then((heroResponce)=>{
            console.log(heroResponce);
        setHero(heroResponce)
        })
        .catch(err=>{
            navigate("/error",{replace:true})
        })

 },[heroId,navigate])








    return(
        <div>
           <h2>Your Hero is this one</h2>

           <h3>name of your hero</h3>

        </div>
    )
}


export default Hero