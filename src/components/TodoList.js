import React from 'react'
import TodoItem from './TodoItem'

export default ({todos, toggleTodo}) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} toggleTodo={toggleTodo} {...todo} />)}
    </ul>
  </div>
)
