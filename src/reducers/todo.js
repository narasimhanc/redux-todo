// Utils
const toggleById = (id) => t => t.id === id ? ({...t, isComplete: !t.isComplete}) : t

// Action Constants
const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creators
export const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id})

// Reducer
export default function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return {...state, todos: state.todos.map(toggleById(action.payload))}
    default:
      return state
  }
}
