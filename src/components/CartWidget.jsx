import React from 'react'
import cart from '../assets/cart.svg'
import {Link} from "react-router-dom"

const CartWidget = () => {
  return (
    <>
    <Link to="/cart">
    <button type="button" class="btn btn-outline-danger bg-gradient mx-4 ps-3" width="40" height="40">

    
    <img src={cart} alt="Logo" width="25" height="32"/>
    <span class="" >0</span>
  </button></Link>
  </>
  )
}

export default CartWidget