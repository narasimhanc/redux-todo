import React from 'react'
import reducer from './todo'

describe('Todo Reducer', () => {
  test('toggles a todo by id', () => {
    const initState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false}
      ]
    }
    const expectedState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: true},
        {id: 3, name:'Use state to render UI', isComplete: false}
      ]
    }
    const result = reducer(initState, {type:'TOGGLE_TODO', payload: 2})
    expect(result).toEqual(expectedState)
  })

  test('changes form input', () => {
    const initState = {
      todos: [],
      currentTodo: ''
    }
    const expectedState = {
      todos: [],
      currentTodo: 'abc'
    }
    const result = reducer(initState, {type:'CURRENT_TODO_CHANGE', payload: 'abc'})
    expect(result).toEqual(expectedState)
  })
})
