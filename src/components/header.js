import React from "react"
import { Link } from "gatsby"

const navLinks = [
  // {
  //   name: "Welcome!",
  //   link: "/",
  // },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Book a BBQ",
    link: "/menu-form",
  },
  {
    name: "About",
    link: "/about",
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
        <Link to="/">
        <img
          src="https://www.sizzlerbbq.com/menu/header_r1_c1.gif"
          alt="Sizzler BBQ Logo"
          style={{ opacity: `85%` }}
        />
        </Link>
      </div>
      {/* navbar */}
      <div class="navbar">
        {/* desktop */}
        <div className="navbar-center hidden md:flex w-screen justify-center">
          <ul className="menu menu-horizontal justify-between p-0 text-primary font-serif underline">
            {navLinks.map(link => {
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
              <svg viewBox="0 0 75 50" width="30" height="25">
                <rect width="75" height="7"></rect>
                <rect y="20" width="75" height="7"></rect>
                <rect y="40" width="75" height="7"></rect>
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks.map(link => {
                return (
                  <Link className="text-primary underline p-2" to={link.link}>
                    {link.name}
                  </Link>
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
