import React from 'react'
import logo from "../assets/pc-gamer.svg"
import CartWidget from './CartWidget'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
  <Link to="/">
    <img src={logo} alt="Bootstrap" width="50" height="50"/>
</Link>
      
    </a>
    <Link to="/">
    <a class="navbar-brand" href="#">Gamer TX</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 position-absolute top-50 start-50 translate-middle">
        <li class="nav-item">
          <Link to="/">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/itemListContainer">
          <a class="nav-link active" href="#">Catálogo</a>
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gama</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Uso</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>

    </>
  )
}

export default NavBar