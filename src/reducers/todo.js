// Utils
const toggleById = (id) => t => t.id === id ? ({...t, isComplete: !t.isComplete}) : t

// Action Constants
const TOGGLE_TODO = 'TOGGLE_TODO'
const CURRENT_TODO_CHANGE = 'CURRENT_TODO_CHANGE'

// Action Creators
export const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id})
export const changeCurrentTodo = (val) => ({type: CURRENT_TODO_CHANGE, payload: val})

// Reducer
export default function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return {...state, todos: state.todos.map(toggleById(action.payload))}
    case CURRENT_TODO_CHANGE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
