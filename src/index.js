import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux'
import todoReducer, {toggleTodo} from './reducers/todo'
import formReducer, {changeCurrentTodo} from './reducers/form'

const reducer = combineReducers({
  todos: todoReducer,
  form: formReducer
})
const store = createStore(reducer)

const toggle = (id) => store.dispatch(toggleTodo(id))
const handleTodoChange = (val) => store.dispatch(changeCurrentTodo(val))

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <App todos={state.todos}
      form={state.form}
      toggleTodo={toggle}
      handleTodoChange={handleTodoChange} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
