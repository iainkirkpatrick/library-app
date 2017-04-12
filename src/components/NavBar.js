import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Murakami books</a>
        </div>
        <div className="collapse navbar-collapse" id="bookshop-navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
