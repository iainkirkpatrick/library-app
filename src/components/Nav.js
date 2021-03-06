import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className="collapse navbar-collapse">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">Bookstore app</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li><NavLink activeClassName="active" to="/books">Books</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="active" to="/cart">Cart</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
