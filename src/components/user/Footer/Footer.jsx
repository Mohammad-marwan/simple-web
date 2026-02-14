import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">

    <div className="row">

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">🚀 MyApp</h5>
        <p className="text-muted">
          Building modern web applications with React & Bootstrap.
        </p>
      </div>

      <div className="col-md-4 mb-4">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled">
          <li><Link className="text-decoration-none text-light" to="/">Home</Link></li>
          <li><Link className="text-decoration-none text-light" to="/Login">Login</Link></li>
          <li><Link className="text-decoration-none text-light" to="/Register">Register</Link></li>
        </ul>
      </div>

      <div className="col-md-4 mb-4">
        <h6 className="fw-bold">Follow Us</h6>
        <div>
          <a href="#" className="text-light me-3 fs-5">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light me-3 fs-5">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light fs-5">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>

    </div>

    <hr className="border-light" />

    <div className="text-center">
      <small>© {new Date().getFullYear()} MyApp. All rights reserved.</small>
    </div>

  </div>
</footer>
  )
}
