const toggleById = (id) => t => t.id === id ? ({...t, isComplete: !t.isComplete}) : t

export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {...state, todos: state.todos.map(toggleById(action.payload))}
    default:
      return state
  }
}
