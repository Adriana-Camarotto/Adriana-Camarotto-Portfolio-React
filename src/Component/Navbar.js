import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
 
  return (    
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        My Portfolio  
      </Link>
       <button
        className="navbar-toggler"
       type="button"
        onClick={ () => document.querySelector('.navbar-nav').classList.toggle('show')}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link> 
          </li>
          <li className="nav-item">
            <Link to="/contactMe" className="nav-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  
   );
}
