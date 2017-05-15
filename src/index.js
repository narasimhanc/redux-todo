import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import todoReducer from './reducers/todo'
import formReducer from './reducers/form'

const reducer = combineReducers({
  todos: todoReducer,
  form: formReducer
})
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
