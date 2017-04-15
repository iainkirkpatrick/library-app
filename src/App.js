import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/Nav'
import Home from './components/Home'
import Cart from './components/Cart'
import AboutPage from './components/About'
// import BookPage from './components/Books'
import BooksContainer from './containers/Books'
import NotFound from './components/NotFound'

const App = ({state, dispatch}) => {
  // console.log("App state: ", state)
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/books" component={BooksContainer} />
      </div>
    </Router>
  )
}

export default App;
