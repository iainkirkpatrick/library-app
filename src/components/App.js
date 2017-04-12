import React, { Component } from 'react'
import HomePage from './mains/HomePage'
import BookPage from './mains/BookPage'
import NavBar from './mains/NavBar'
import {Link} from 'react-router'

const App = ({state, dispatch}) => {
  return (
    <div className="container">
      <NavBar />
      <BookPage state={state}/>
    </div>
  )
}

export default App


// <HomePage />
