import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Item = ({nombre, precio, modelo, gama, imagen, id}) => {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center pt-5 mt-5 pb-5">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12">
    <div className="card d-flex align-items-center">
  <img src={imagen} className="card-img-top w-25" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">Precio: {precio}</p>
    <Link className="btn btn-primary" to={`/item/${id}`}>
    Detalles
    </Link>
  </div>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Item