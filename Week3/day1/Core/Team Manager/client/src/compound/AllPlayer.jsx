import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"

const AllPlayer = () => {
    const [teamManager,setTeamManager] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/teamManager")
        .then((Response)=>{
            setTeamManager(Response.data)
        })
        .catch(err =>(console.log(err)))
    },[])

    return (
    <>
    <h1>Team Manager</h1>
    {
        teamManager.map((TeamManager, index)=>{
        return <div>
        <h3><hr/>player Name : {TeamManager.playerName}</h3>
        <h3>preferred Position : {TeamManager.preferredPosition}</h3>
        </div>
        })
    }
</>
    )
}

export default AllPlayer