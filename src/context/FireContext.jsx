import React from 'react'
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const FireContext = React.createContext([])
export const useFireContext = () => useContext(FireContext)

const FireProvider = ({children, ordenId}) =>{

const [newOrderId, setNewOrderId] = useState('')
const [newOrder, setNewOrder] = useState('')
const [info, setInfo] = useState({})
    
        const querydb = getFirestore()
        const queryDocs = doc(querydb, 'orden', "GfT94Zib0R5KuCRspfBA")
        

    return (
        <FireContext.Provider value={{
          info
        }}>
            {children}
        </FireContext.Provider>
      )

}

export default FireProvider