import React, { Component } from 'react'
import HomePage from './mains/HomePage'
import BookPage from './mains/BookPage'
import NavBar from './mains/NavBar'
import {Link} from 'react-router'

const App = ({state, dispatch}) => {
  return (
    <div className="container">
      <NavBar />
    </div>
  )
}

export default App


// <HomePage />
// <BookPage state={state}/>
