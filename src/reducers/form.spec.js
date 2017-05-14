import reducer from './form'

describe('Form reducer', () => {
  test('changes form input', () => {
    const initState = {
      currentTodo: ''
    }
    const expectedState = {
      currentTodo: 'abc'
    }

    const result = reducer(initState, {type:'CURRENT_TODO_CHANGE', payload: 'abc'})
    expect(result).toEqual(expectedState)
  })
})
