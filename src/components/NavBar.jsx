import React from 'react'
import logo from "../assets/pc-gamer.svg"
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-dark bg-secondary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="100" height="50" class="d-inline-block align-text-top"/>
    </a>
    <a class="navbar-brand position-absolute top-50 start-50 translate-middle" href="#">Gamer TX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Catálogo</a>
        <a class="nav-link" href="#">Tarjetas</a>
        <a class="nav-link" href="#">Procesadores</a>
        
      </div>
    </div>
    
  </div>
  <CartWidget/>
</nav>

    </>
  )
}

export default NavBar