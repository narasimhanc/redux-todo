import React from 'react'
import TodoItem from './TodoItem'

export default ({todos}) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
)
