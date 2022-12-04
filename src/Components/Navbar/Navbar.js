import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import SearchWidget from '../SearchWidget/SearchWidget'
import SingUp from '../SingUp/SingUp'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
    <div className="container-fluid">
    
      <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand logo" href="#"> I love <span>Coffee</span></a>
      <div className="offcanvas offcanvas-start " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header mobile-menu">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div className="offcanvas-body mobile-menu">
          <ul className="navbar-nav justify-content-space-arownd ">
            <li className="nav-item link">
              <a className="nav-link  links" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item link">
              <a className="nav-link links" href="#">About us</a>
            </li>
            <li className="nav-item dropdown link">
              <a className="nav-link dropdown-toggle links" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Coffee
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>

            </li>
            <li className="nav-item">
              <a className="nav-link links" href="#" data="Contact">Contact</a>
            </li>
          </ul>
          <div className='div-icons-mobile'>
              <ul className='ul-icons-mobile'>
                  <li className='icons-mobile'><SearchWidget/></li>
                  <li className='icons-mobile'><CartWidget/></li>
                  <SingUp className='icons-mobile'/> 
              </ul>
        
      </div>
        </div>
        
      </div>
      
      <div className='div-icons'>
        <ul className='ul-icons'>
            <li className='icons'><SearchWidget/></li>
            <li className='icons'><CartWidget/></li>
            <SingUp/> 
        </ul>
        
      </div>
      
    </div>
  </nav>

  )
}

export default Navbar