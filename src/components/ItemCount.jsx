import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';

const ItemCount = ({ initial, data, stock, onAdd }) => {

    const [counter, setCounter]= useState(initial);

    useEffect(() => {
        setCounter(parseInt(initial))
    },[initial])

    const restar = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

    const sumar = () => {
      if (counter !== stock) {
          setCounter(counter + 1)

      }
  }


  return (
    <div>
        
        <button type="button" className="btn btn-danger" onClick={restar}>-</button>
        <button disabled={stock <= 0 }type="button" className="btn btn-light"  onClick={() => {onAdd(counter)}}>Agregar al carrito: {counter}</button>
        <button type="button" className="btn btn-success" onClick={sumar}>+</button>
        

    </div>
  )
}

export default ItemCount