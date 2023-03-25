import React from 'react'
import { useState, useEffect } from 'react'

const Loader = () => {

    const [load, setLoad] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoad(false)
      }, 1000);
    })
  

  return (
    <>
    {load ? <div className="d-flex justify-content-center mt-5">
        <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
    </div></div> : null}
    
  </>
  )
}

export default Loader