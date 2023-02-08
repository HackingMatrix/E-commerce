import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
    <button type="button" class="btn btn-outline-danger bg-gradient mx-4 ps-3" width="40" height="50">
    <img src={cart} alt="Logo" width="25" height="32"/>
    <span class="mx-1 ps-1" >0</span>
  </button>
  </>
  )
}

export default CartWidget