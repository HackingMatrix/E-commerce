import React from 'react'
import { useState } from 'react'

const ItemCount = ({ data }) => {
  
    const [counter, setCounter]= useState(0);

    const restar = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

    const sumar = () => {
      if (counter !== data) {
          setCounter(counter + 1)

      }
  }


  return (
    <div>
        
        <button type="button" className="btn btn-danger" onClick={restar}>-</button>
        <button type="button" className="btn btn-primary">Agregar al carrito: {counter}</button>
        <button type="button" className="btn btn-success" onClick={sumar}>+</button>
        

    </div>
  )
}

export default ItemCount