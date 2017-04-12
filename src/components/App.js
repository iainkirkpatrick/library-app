import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { browserHistory } from 'react-router'

import HomePage from './mains/HomePage'
import BookPage from './mains/BookPage'
import AboutPage from './mains/AboutPage'
import NavBar from './mains/NavBar'
// import {Link} from 'react-router'

// import Routes from '../routes'


const App = ({state, dispatch}) => {
  return (
    <div className="container">
      <NavBar />
      <HomePage/>
    </div>
  )
}

export default App


// <HomePage />
