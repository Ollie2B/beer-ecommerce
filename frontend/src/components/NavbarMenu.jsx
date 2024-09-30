import './NavbarMenu.css'

const NavbarMenu = () => {
  const openMenu = () => {
    window.alert('You opened the menu')
  }

  return (
    <div className="navbarmenu-container">
      <button className="navbarmenu-menu" onClick={() => openMenu()}>
        <img src="/menu-icon.svg" alt='menu'/>
      </button>   
      <img src="/default-user.jpg" alt="default-user" className="navbarmenu-user-icon"/>
    </div>
  )
}

export default NavbarMenu