import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3">
        {/* <img src="../../src/img/pokemon.png" /> */}
        <h5>Pokedox</h5>
        <small>&copy; 2025. All rights reserved.</small>
        
      </div>
      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
          <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
          <li><Link to="/favourites" className="text-light text-decoration-none">Favourites</Link></li>
        </ul>
      </div>
      <div className="col-md-4 mb-3">
        <h5>Follow Us</h5>
        <Link to="#" className="text-light me-3"><i className="bi bi-facebook"></i></Link>
        <Link to="#" className="text-light me-3"><i className="bi bi-twitter"></i></Link>
        <Link to="#" className="text-light"><i className="bi bi-instagram"></i></Link>
      </div>
    </div>
   
  </div>
</footer>

  )
}

export default Footer
