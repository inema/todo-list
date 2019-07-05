export const deleteTodo = index => {
  return {type: 'DELETE_TODO', index}
}

export const completeTodo = index => {
  return {type: 'COMPLETE_TODO',index}
}

export const addTodo = todo => {
  return {type: 'ADD_TODO', todo}
}
export const setShowCompleted = showCompleted => {
  return {type: 'SET_SHOW_COMPLETED', showCompleted}
}
