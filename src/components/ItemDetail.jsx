import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ datos }) => {

    const { id } = useParams()
    
    const cardFilter = datos.filter((dato) => dato.id == id)
  return (
    <>
    {cardFilter.map((dato) => (
        <div key={dato.id}className="container d-flex justify-content-center align-items-center pt-5 mt-5">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12">
    <div className="card d-flex align-items-center">
  <img src={dato.imagen} className="card-img-top w-25" alt="..."/>
  <div className="card-body ">
    <h4>{dato.nombre}</h4>
    <h5>Modelo: {dato.modelo}</h5>
    <h5>Uso: {dato.uso}</h5>
    <h6>Stock: {dato.stock}</h6>
    <p className="card-text">Precio: {dato.precio}</p>
    <ItemCount data={dato.stock}/>
  </div>
  </div>
</div>
</div>
</div>
    ))}
    </>
  )
}

export default ItemDetail