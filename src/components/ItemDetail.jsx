import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { useEffect } from 'react'

const ItemDetail = ({ datos, filtro }) => {

    const [ircarrito, setIrCarrito] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (quantity) => {
      setIrCarrito(true)
      addToCart(datos, quantity)
    }

  return (
    <>
        <div key={datos.id}className="container d-flex justify-content-center align-items-center pt-5 mt-5">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12">
    <div className="card d-flex align-items-center">
  <img src={datos.imagen} className="card-img-top w-25" alt="..."/>
  <div className="card-body ">
    <h4>{datos.nombre}</h4>
    <h5>Modelo: {datos.modelo}</h5>
    <h5>Uso: {datos.uso}</h5>
    <h6>Stock: {datos.stock}</h6>
    <p className="card-text">Precio: {datos.precio}</p>
    {
      ircarrito ? <div>
      <Link to='/Cart' >Terminar Compra</Link>
      <br />
      <Link to={'/ItemListContainer'}>Seguir Comprando</Link>
      </div>
      : <ItemCount initial={1} stock={datos.stock} onAdd={onAdd}/>
    }
    
  </div>
  </div>
</div>
</div>
</div>

    </>
  )
}

export default ItemDetail