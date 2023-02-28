import React from 'react'
import logo from "../assets/pc-gamer.svg"
import CartWidget from './CartWidget'
import {Link} from "react-router-dom"
import '../styles/styles.css'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid">
  
  <Link className="navbar-brand" to="/">
    <img src={logo} alt="Bootstrap" width="50" height="50"/>
</Link>
      
    <Link className="navbar-brand" to="/">
    Gamer TX
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-absolute top-50 start-50 translate-middle">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
          Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/itemListContainer">
          Catálogo
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gama
          </a>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to={`/${"Baja"}`}>
            <li>Baja</li>
            </Link>
            <Link className="dropdown-item" to={`/${"Media"}`}>
            <li>Media</li>
            </Link>
            <Link className="dropdown-item" to={`/${"Alta"}`}>
            <li>Alta</li>
            </Link>
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