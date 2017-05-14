import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import reducer, {toggleTodo} from './reducers/todo'

const initState = {
  todos: [
    {id: 1, name:'Create Static UI', isComplete: true},
    {id: 2, name:'Create Initial State', isComplete: true},
    {id: 3, name:'Use state to render UI', isComplete: false},
    {id: 4, name:'Control state with Redux', isComplete: false}
  ]
}

const store = createStore(reducer, initState)

const toggle = (id) => store.dispatch(toggleTodo(id))

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App todos={state.todos}
      toggleTodo={toggle} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
