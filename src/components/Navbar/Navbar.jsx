import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container '>
      <h1 className='navbar-title'>MovieZone</h1>
      <div className='nav-btn'>
        <button className='signin-btn navbar-btn'>Sign In</button>
        <button className='signup-btn navbar-btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
