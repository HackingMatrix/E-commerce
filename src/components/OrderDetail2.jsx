import React from 'react'
import { useEffect, useState } from 'react'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

const OrderDetail2 = () => {
   
    const [info, setInfo] = useState('')

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'orden')
        getDocs(queryCollection)
        .then(res => setInfo(res.docs.map(product => product.data().newCart)))
    },[])

    console.log(info)


  return (
    <>
    </>
  )
}

export default OrderDetail2