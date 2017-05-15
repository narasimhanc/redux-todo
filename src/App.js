import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import TodoList from './components/TodoList'
import {toggleTodo} from './reducers/todo'
import {changeCurrentTodo} from './reducers/form'

class App extends Component {
  handleTodoInput (evt) {
    const newVal = evt.target.value
    this.props.handleTodoChange(newVal)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React & Redux Todo</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" onChange={this.handleTodoInput.bind(this)} value={this.props.form.currentTodo} />
          </form>
          <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({todos: state.todos, form: state.form}),
  (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    handleTodoChange: (val) => dispatch(changeCurrentTodo(val))
  })
)(App)
