import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const {gama} = useParams()
console.log(gama)
  const datos = [{id: 1, nombre: "GeForce RTX", precio: 5000, modelo:1070, gama:"Baja", imagen:"src/assets/tarjeta1.jpg", uso: "Diseño", stock:5},
                  {id: 2, nombre: "GeForce RTX", precio: 7000, modelo:3050, gama:"Media", imagen:"src/assets/tarjeta2.jpg", uso: "Diseño", stock:4},
                  {id: 3, nombre: "GeForce RTX", precio: 12000, modelo:3070, gama:"Alta", imagen:"src/assets/tarjeta3.jpg", uso: "Gaming", stock:5},
                  {id: 4, nombre: "GeForce RTX", precio: 20000, modelo:4090, gama:"Alta", imagen:"src/assets/tarjeta4.jpg", uso: "Gaming", stock:3}]

    const getDatos = () => {
      return new Promise((resolve, reject) => {
        if (datos.lenght === 0) {
          reject(new Error("No hay datos para mostrar"))

        }
        else {
          setTimeout(() => {
            resolve(datos)
          },3000)
        }
      })
    }

    async function fetchData() {
      try {
        const datosFetched = await getDatos()
        console.log(datosFetched)
      }
      catch(err) {
        console.log(err)
      }
    }

    fetchData()

    const catFilter = datos.filter((dato) => dato.gama === gama)
  return (
    <>
    {gama ? <ItemList datos={catFilter} /> : <ItemList datos={datos} />}
    </>
  )
}

export default ItemListContainer