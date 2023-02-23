import React, { useState } from 'react'
import Dachbord from '../components/Dachbord'
import Form from '../components/Form'

const Main = () => {

    const [refreshstate,setRefrech] = useState(false)

    const refresh =()=>{
      setRefrech(!refreshstate)
    }





  return (
    <>
    <Form refresh={refresh} refreshed = {refreshstate}/>
    <Dachbord refresh={refresh} refreshed = {refreshstate}/>
    </>
  )
}

export default Main