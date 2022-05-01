import React from "react"
import { Link } from "gatsby"

const navLinks = [
  {
    name: "Welcome!",
    link: "/",
  },
  {
    name: "Our Menu",
    link: "/menu",
  },
  {
    name: "Testimonials & FAQ",
    link: "/faq",
  },
  {
    name: "Service Outline Form",
    link: "/service-form",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const header = () => {
  return (
    <header className="w-screen flex flex-col items-center border-b-2 bg-white">
      {/* logo */}
      <div className="flex flex-col items-center"> 
        <img
          src="https://www.sizzlerbbq.com/menu/header_r1_c1.gif"
          alt="Sizzler BBQ Logo"
          style={{ opacity: `85%` }}
        />
      </div>
      {/* navbar */}
      <div class="navbar">

        {/* desktop */}
      <div className="navbar-center hidden md:flex w-screen justify-center">
        <ul className="menu menu-horizontal justify-between p-0 text-primary font-serif underline">
          {navLinks.map((link) => {
            return (
              <li className="menu-item">
                <Link to={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>  

        {/* mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
              <ul tabindex="0" className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks.map((link) => {
                  return (
                    <Link className="text-primary underline p-2" to={link.link}>{link.name}</Link>
                  )
                })}
              </ul>
          </div>
        </div>

      </div>
    </header>
  )
}

export default header
