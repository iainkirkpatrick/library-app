import React from 'react'
import { Router, Route } from 'react-router'

import App from './App'
import AboutPage from './components/AboutPage'
import BookPage from './components/BookPage'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/about" component={AboutPage} />
       <Route path="/books" component={BookPage} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
)
export default Routes
