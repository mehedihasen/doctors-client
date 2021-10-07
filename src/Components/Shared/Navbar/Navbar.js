import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link me-5 active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 active" aria-current="page" href="/home">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 active" aria-current="page" href="/home">Denteal Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 active text-white" aria-current="page" href="/home">Reviwes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 active text-white" aria-current="page" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5 active text-white" aria-current="page" href="/footer">Contact us
          </a>
        </li>
      
   
      </ul>
    
    </div>
  </div>
</nav>
    );
};

export default Navbar;