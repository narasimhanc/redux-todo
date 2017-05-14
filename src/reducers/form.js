const initState = {
  currentTodo: ''
}
// Action Constants
const CURRENT_TODO_CHANGE = 'CURRENT_TODO_CHANGE'

// Action Creators
export const changeCurrentTodo = (val) => ({type: CURRENT_TODO_CHANGE, payload: val})

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case CURRENT_TODO_CHANGE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
