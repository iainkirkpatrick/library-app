import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import initialState from './redux/initialState'

ReactDOM.render(
  <App state={initialState}/>,
  document.getElementById('root')
)
