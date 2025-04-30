import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/svg/Logo'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <div className="container">
          <a className="navbar-brand" href="/" >
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pokedex/list">
                  Pokedex
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favourites">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
