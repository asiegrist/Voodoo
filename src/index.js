import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import AppReducer from './reducers'
import App from './components/App'

//import "./styles.css";

const store = createStore(AppReducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
