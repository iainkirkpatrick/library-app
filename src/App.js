import React, { Component } from 'react'

const App = ({state, dispatch}) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>The initial state is {state.text}</p>
    </div>
  )
}

export default App
