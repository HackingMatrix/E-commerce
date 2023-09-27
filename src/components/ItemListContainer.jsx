import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from './Loader'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

const ItemListContainer = () => {

  const {gamaCat} = useParams()
console.log(gamaCat)
 

  const [data, setData] = useState([])
 
  useEffect(() => {
    const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Tarjetas')
        
        if (gamaCat) {
          const queryFilter = query(queryCollection, where('gama', '==', gamaCat))
          getDocs(queryFilter)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
        else {
          getDocs(queryCollection)
              .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }

  },[gamaCat])


  return (
    <>
    <Loader/>
    <ItemList datos={data} />
    </>
  )
}

export default ItemListContainer