import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Postplayer = () => {
    const [playerName, setPlayerName] = useState([])
    const [preferredPosition, setPreferredPosition] = useState([])

    const SubmitHandler =(e)=>{
    axios.post("http://localhost:8000/api/teamManager", {playerName, preferredPosition})
            .then(res=>{
                console.log(res);
            })
            .catch(err=>console.log(err))
        }


    return (
    <form onSubmit={SubmitHandler}>
        <label>playerName :</label>
        <input type="text"  onChange={(e)=> {setPlayerName(e.target.value)}}></input><br />
        <label>preferredPosition :</label>
        <input type="text" onChange={(e)=>{setPreferredPosition(e.target.value)}}></input><br />
        <input type="submit"/>
    </form>
    )
}


export default Postplayer