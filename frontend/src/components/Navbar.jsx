import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className='navbar-menu'>
        <span className='navbar-menu-icon'>≡</span>
      </div>   
      <div className='navbar-user'>
        <img src='/default-user.jpg' alt='default-user' className='navbar-user-icon'/>
      </div>
    </div>
  )
}

export default Navbar