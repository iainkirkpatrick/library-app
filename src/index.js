import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import App from './App'
import reducer from './redux/reducer'
import initialState from './redux/initialState'

const root = document.getElementById('root')
const store = createStore(reducer, initialState, devToolsEnhancer())

store.subscribe( () => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch}/>
    </Provider>,
    root
  )
})

store.dispatch({type: 'INIT'})
