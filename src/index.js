import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Router, Route } from 'react-router'
import { browserHistory } from 'react-router'

import App from './components/App';
import reducer from './redux/reducer'
// import Routes from './routes'

const root = document.getElementById('root')
const store = createStore(reducer, devToolsEnhancer())

store.subscribe( () => {
  render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch}/>
    </Provider>,
    root
  )
})

// render(
//   <Routes history={browserHistory} />,
//   root
// )

store.dispatch({type: 'INIT'})
