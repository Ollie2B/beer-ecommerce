import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const NavbarMenu = () => {
  const navigateTo = useNavigate();
  return (
    <div className="navbar-container">
      <button className='navbar-button' onClick={()=> navigateTo(`/products`)}>
        <img src='/icon-back.svg' alt='back'/>
      </button>
      <div className='navbar-title'>
        Detail
      </div>
      <div className='navbar-button'>
        <img src='/icon-dots.svg' alt='options' className='navbar-options'/>
      </div>
    </div>
  )
}

export default NavbarMenu