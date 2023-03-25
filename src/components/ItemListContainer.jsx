import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from './Loader'

const ItemListContainer = () => {

  const {gama} = useParams()
console.log(gama)
  const datos = [{id: 1, nombre: "GeForce RTX", precio: 5000, modelo:1070, gama:"Baja", imagen:"src/assets/tarjeta1.jpg", uso: "Diseño", stock:5},
                  {id: 2, nombre: "GeForce RTX", precio: 7000, modelo:3050, gama:"Media", imagen:"src/assets/tarjeta2.jpg", uso: "Diseño", stock:4},
                  {id: 3, nombre: "GeForce RTX", precio: 12000, modelo:3070, gama:"Alta", imagen:"src/assets/tarjeta3.jpg", uso: "Gaming", stock:5},
                  {id: 4, nombre: "GeForce RTX", precio: 20000, modelo:4090, gama:"Alta", imagen:"src/assets/tarjeta4.jpg", uso: "Gaming", stock:3}]

  const [data, setData] = useState([])
  const [filt, setFilter] = useState([])
 
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(datos)
      }, 1000);
    })

    getData.then(res => setData(res))
    
  },[])

  useEffect(() =>{
    const getFilter = new Promise (resolve => {
        setTimeout(() => {
            resolve(datos)
        }, 1000);
    })

    getFilter.then(res => setFilter(res.filter(card => card.gama == gama)))
},[gama])

    const catFilter = datos.filter((dato) => dato.gama === gama)
    console.log(filt)
  return (
    <>
    <Loader/>
    {gama ? <ItemList datos={filt} /> : <ItemList datos={data} />}
    </>
  )
}

export default ItemListContainer