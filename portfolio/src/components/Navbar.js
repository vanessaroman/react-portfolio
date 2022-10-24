import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/Home"
            > <h1>Vanessa Roman</h1></NavLink></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/Home"
            > Home</NavLink>
              <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/about"
            >About me</NavLink>
             <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
            >Portfolio</NavLink>
            <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/contact"
            >Contact</NavLink>

<NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/resume"
            >Resume</NavLink>

            
              {/* <a class="nav-link disabled">Contact</a>
              <a class="nav-link disabled">Resume</a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;