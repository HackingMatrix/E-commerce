import React, { useEffect, useState } from 'react'
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import ItemCart from './ItemCart'
import ItemOrder from './ItemOrder'
import OrderDetail2 from './OrderDetail2'

const OrderDetail = ({ordenId, mail, nombre}) => {

  const [info, setInfo] = useState('')

  useEffect(() =>{
    const querydb = getFirestore()
    const queryDocs = doc(querydb, 'orden', ordenId)
    getDoc(queryDocs).then(res => setInfo({IdOrder: ordenId, ...res.data()}))
  },[ordenId])

  console.log(info)

  return (
    <>
    <h5 className='text-center pt-5 mt-5'>Id de product: {ordenId}</h5>
    <h6>Enviaremos un correo a: {mail} con el código de orden</h6>
    <h6>Gracias {nombre}</h6>
    </>
  )
}

export default OrderDetail