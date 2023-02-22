import React from 'react'
import {useState } from 'react'

const ItemCount = () => {

    const [counter, setCounter]= useState(0);

    const restar = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={restar}>-</button>

    </div>
  )
}

export default ItemCount