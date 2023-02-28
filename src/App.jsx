import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>


      <NavBar/>

      <Routes>

      <Route exact path="/itemListContainer" element={<ItemListContainer/>}/>
      <Route exact path="/" element={<Welcome/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route 
        exact
        path='/:gama'
        element={<ItemListContainer/>}
      />

      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
      
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
