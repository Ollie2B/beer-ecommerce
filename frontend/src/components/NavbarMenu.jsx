import React from 'react'
import './NavbarMenu.css'

const NavbarMenu = () => {
  return (
    <div className="navbarmenu-container">
      <div className='navbarmenu-menu'>
        {/* <span className='navbarmenu-menu-icon'>≡</span> */}
        <img src='/menu-icon.svg' alt='menu'/>
      </div>   
      <div className='navbarmenu-user'>
        <img src='/default-user.jpg' alt='default-user' className='navbarmenu-user-icon'/>
      </div>
    </div>
  )
}

export default NavbarMenu