import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-light" style={{border: 10}} >

        <div class="container-fluid">
          <a class="navbar-brand" href="#"><NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/Home"
            > <h1 style={{color:'lavenderblush', fontSize: 30, letterSpacing: 3}}>VRoman.</h1></NavLink></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

            <div class="navbar-nav">
            <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/Home" style={{color:'lavenderblush'}}
            > home</NavLink>
              <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/about"
            style={{color:'lavenderblush'}}>about</NavLink>
             <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
            style={{color:'lavenderblush'}}>portfolio</NavLink>
            <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/contact"
            style={{color:'lavenderblush'}}>contact</NavLink>

<NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/resume"
            style={{color:'lavenderblush'}}>resume</NavLink>

            
              {/* <a class="nav-link disabled">Contact</a>
              <a class="nav-link disabled">Resume</a> */}
            </div>

          </div>
        </div>

      </nav>
    );
  }
  
  export default Navbar;