import React from 'react'

export default (props) => (
  <li>
    <input type="checkbox" defaultChecked={props.isComplete} />
    {props.name}
  </li>
)
