import React, { useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import { collection,getFirestore, addDoc, or } from 'firebase/firestore'
import { useState } from 'react'
import OrderDetail from './OrderDetail'
import OrderDetail2 from './OrderDetail2'
import FireProvider from '../context/FireContext'

const Cart = () => {

  const {cart, totalProductos, totalCompra} = useCartContext()
  const [newCart, setNewCart] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [remove, setRemove] = useState(true)

  const db = getFirestore()

  const hanldeform = (e) =>{
      e.preventDefault()
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
      setRemove(false)
  }
  
  console.log(orderId)

  useEffect(() =>{
    setNewCart(cart.map((res) => ({name: name, mail:mail, orderId: orderId, ...res})))
  },[orderId])
  
  console.log(orderId)

  const order = {
      newCart,
      orderId
  }

  console.log(mail)
  console.log(name)
  console.log(newCart)

  const ordersCollection = collection(db, 'orden')

  

  if (cart.length == 0 && remove == true) {
    return(
      <>
    <h2 className="text-center pt-5">No has agregado elementos al carrito</h2>
    <Link to={'/itemListContainer'} ><h3 className='text-center pt-5'>Ir a comprar</h3></Link>
    </>
    )
  }

  else if (remove == true){return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <h3 className='text-center pt-5'>Total: {totalCompra()}</h3>
    <div>
        <div className="container">
            <div className="row pt-5 mt-5 pb-5 mb-5">
                <div className="col">
        <form onSubmit={hanldeform}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input onMouseLeave={(e) => setMail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Name/Last Name</label>
      <input onChange={(e) => setName(e.target.value)} type="name" className="form-control" id="exampleInputPassword1"/>
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
  )} else {return( 
  <div> <OrderDetail ordenId={orderId} mail={mail} nombre={name}/> 
  <OrderDetail2 
  ordenId={orderId}/>
  <FireProvider ordenId={orderId}/>
  </div>)
    
  }
  
}

export default Cart