import React from 'react'

const Item = ({nombre, precio, modelo, gama, imagen}) => {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex align-items-center">
            <div className="col-sm-12">
    <div class="card d-flex align-items-center">
  <img src={imagen} class="card-img-top w-25" alt="..."/>
  <div class="card-body ">
    <h5 class="card-title">{nombre}</h5>
    <p class="card-text">Precio: {precio}</p>
    <a href="#" class="btn btn-primary">Detalles</a>
  </div>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Item