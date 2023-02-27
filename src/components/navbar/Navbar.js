import React from 'react'
import { Link } from "react-router-dom";

//---------css file import-----
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar_container">
        <div className="navbar_logo">
            LOGO
        </div>
        <div className="navbar_links">
            <div>
            <Link to='/'>Home</Link>
            </div>
            <div>
            <Link to='/signIn'>Login</Link>
            </div>
            <div>
              Logout
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar