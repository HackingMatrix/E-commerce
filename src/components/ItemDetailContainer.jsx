import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Loader from './Loader'

export const ItemDetailContainer = () => {

    

    const datos = [{id: 1, nombre: "GeForce RTX", precio: 5000, modelo:1070, gama:"Baja", imagen:"src/assets/tarjeta1.jpg", uso: "Diseño", stock:5},
    {id: 2, nombre: "GeForce RTX", precio: 7000, modelo:3050, gama:"Media", imagen:"src/assets/tarjeta2.jpg", uso: "Diseño", stock:4},
    {id: 3, nombre: "GeForce RTX", precio: 12000, modelo:3070, gama:"Alta", imagen:"src/assets/tarjeta3.jpg", uso: "Gaming", stock:5},
    {id: 4, nombre: "GeForce RTX", precio: 20000, modelo:4090, gama:"Alta", imagen:"src/assets/tarjeta4.jpg", uso: "Gaming", stock:3}]

    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        const getDatos = new Promise (resolve => {
            setTimeout(() => {
                resolve(datos)
            }, 1000);
        })

        getDatos.then(res => setData(res.find(card => card.id === parseInt(id))))
    },[])

return (
<>
<Loader/>
<ItemDetail datos={data} />
</>
)
}

export default ItemDetailContainer