import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import reducer from './reducer.js'

require('../styles/main.scss')

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('app')
)
