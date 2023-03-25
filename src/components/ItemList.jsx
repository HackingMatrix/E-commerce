import React from 'react'
import Item from './Item'

const ItemList = ({datos}) => {
  console.log(datos)
  return (
    <>
    {datos.map((dato) => (
        <Item
        key={dato.id}
        id={dato.id}
        nombre={dato.nombre}
        precio={dato.precio}
        modelo={dato.modelo}
        gama={dato.gama}
        imagen={dato.imagen}
        />
    ))
    }
    </>
  )
}

export default ItemList