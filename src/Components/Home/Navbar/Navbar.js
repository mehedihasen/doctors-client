import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link me-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-5 active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-5 active" aria-current="page" href="#">Denteal Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-5 active text-white" aria-current="page" href="#">Reviwes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-5 active text-white" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-5 active text-white" aria-current="page" href="#">Contact us
          </a>
        </li>
      
   
      </ul>
    
    </div>
  </div>
</nav>
    );
};

export default Navbar;