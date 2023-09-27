import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

export const ItemDetailContainer = () => {

    

    

    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        const querydb = getFirestore()
        const queryDocs = doc(querydb, 'Tarjetas', id)
        getDoc(queryDocs).then(res => setData({id: res.id, ...res.data()}))
    },[])

return (
<>
<Loader/>
<ItemDetail datos={data} />
</>
)
}

export default ItemDetailContainer