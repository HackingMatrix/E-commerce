import React, { useState, useContext } from 'react';

 const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {

const [cart, setCart] = useState([])

console.log(cart)

const addToCart = (item, quantity) => {
  let newCart
  let product = cart.find(producto => producto.id == item.id)
  if (product) {
    product.quantity = product.quantity + quantity
    newCart = [...cart]
  }
  else {
    product = {...item, quantity:quantity}
    newCart = [...cart, product]
  }
  setCart(newCart)
}

const clear = () => setCart([])

const isInCart = (id) => cart.find(product => product === product.id) ? true : false

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

const totalCompra = () => {
  return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
}

const totalProductos = () => cart.reduce((acumulador, actual ) => acumulador + actual.quantity, 0)

  return (
    <CartContext.Provider value={{
      clear,
      isInCart,
      removeProduct,
      addToCart,
      totalCompra,
      totalProductos,
      cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider