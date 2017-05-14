const initState = [
    {id: 1, name:'Create Static UI', isComplete: true},
    {id: 2, name:'Create Initial State', isComplete: true},
    {id: 3, name:'Use state to render UI', isComplete: false},
    {id: 4, name:'Control state with Redux', isComplete: false}
  ]

// Utils
const toggleById = (id) => t => t.id === id ? ({...t, isComplete: !t.isComplete}) : t

// Action Constants
const TOGGLE_TODO = 'TOGGLE_TODO'

// Action Creators
export const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id})

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(toggleById(action.payload))
    default:
      return state
  }
}
