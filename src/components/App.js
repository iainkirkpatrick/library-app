import React, { Component } from 'react'
import HomePage from './mains/HomePage'
import BookPage from './mains/BookPage'
import {Link} from 'react-router'

const App = ({state, dispatch}) => {
  return (
    <div className="container">
      <HomePage />
      <BookPage state={state}/>
    </div>
  )
}

export default App

// <nav className="navbar navbar-default">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <a className="navbar-brand" href="#">Murakami books</a>
//     </div>
//     <div className="collapse navbar-collapse" id="bookshop-navbar-collapse">
//       <ul className="nav navbar-nav">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/books">Books</Link></li>
//         <li><Link to="/cart">Cart</Link></li>
//       </ul>
//     </div>
//   </div>
// </nav>
