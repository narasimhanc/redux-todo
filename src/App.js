import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React & Redux Todo</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default App;
