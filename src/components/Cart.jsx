import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {

  const {cart, totalProductos, totalCompra} = useCartContext()

  if (cart.length == 0) {
    return(
      <>
    <h2 className="text-center pt-5">No has agregado elementos al carrito</h2>
    <Link to={'/itemListContainer'} ><h3 className='text-center pt-5'>Ir a comprar</h3></Link>
    </>
    )
  }

  else {return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <h3 className='text-center pt-5'>Total: {totalCompra()}</h3>
    <div>
        <div className="container">
            <div className="row pt-5 mt-5 pb-5 mb-5">
                <div className="col">
        <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </>
  )}
  
}

export default Cart