import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext()
  return (
    <>
        <div key={product.id}className="container d-flex justify-content-center align-items-center pt-5 mt-5">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12">
    <div className="card d-flex align-items-center">
  <img src={product.imagen} className="card-img-top w-25" alt="..."/>
  <div className="card-body ">
    <h4>{product.nombre}</h4>
    <h5>Modelo: {product.modelo}</h5>
    <h5>Uso: {product.uso}</h5>
    <h6>Subtotal: ${product.precio * product.quantity}</h6>
    <h6>Cantidad: {product.quantity}</h6>
    <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar Producto</button>
  </div>
  </div>
</div>
</div>
</div>


    </>
  )
}

export default ItemCart