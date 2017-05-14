import React from 'react'

export default (props) => (
  <li>
    <input type="checkbox" onChange={() => props.toggleTodo(props.id)} checked={props.isComplete} />
    {props.name}
  </li>
)
