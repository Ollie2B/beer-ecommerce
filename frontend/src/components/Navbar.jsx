import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const NavbarMenu = () => {
  const navigateTo = useNavigate()

  const openOptions = () => {
    window.alert('You opened the options')
  }

  return (
    <div className="navbar-container">
      <button className="navbar-button" onClick={()=> navigateTo(`/products`)}>
        <img src="/icon-back.svg" alt="back"/>
      </button>
      <div className="navbar-title">
        Detail
      </div>
      <button className="navbar-button" onClick={()=> openOptions()}>
        <img src="/icon-dots.svg" alt="options" className="navbar-options"/>
      </button>
    </div>
  )
}

export default NavbarMenu