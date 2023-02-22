import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!"/>
      <ItemCount/>
    </div>
  )
}

export default App
