import React from "react"
import { Link } from "gatsby"

const header = () => {
  return (
    <header className="w-screen flex flex-col items-center border-b-2 bg-white">
      {/* logo */}
      <div className="w-screen flex flex-col items-center"> 
        <img
          src="https://www.sizzlerbbq.com/menu/header_r1_c1.gif"
          alt="Sizzler BBQ Logo"
          style={{ opacity: `85%` }}
        />
      </div>
      {/* navbar */}
      <div class="navbar">
        {/* mobile */}
        
        {/* desktop */}
      <div className="navbar-center hidden md:flex w-screen justify-center">
        <ul className="menu menu-horizontal justify-between p-0 text-primary font-serif underline">
          <li><Link to="/">Welcome!</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/faq">Testimonials & FAQ</Link></li>
          <li><Link to="/service-form">Service Outline Form</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>  

      </div>
    </header>
  )
}

export default header
