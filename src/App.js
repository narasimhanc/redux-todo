import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList'



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
            <input type="text" onChange={this.handleTodoInput.bind(this)} value={this.props.currentTodo} />
          </form>
          <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
        </div>
      </div>
    );
  }
}

export default App;
