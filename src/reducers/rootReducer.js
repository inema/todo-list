const initState = {
  todos : [
    { content: 'do laundry'},
    { content: 'clean house'}
  ],
  completed : [],
  showCompleted : false
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    return deleteTodo(state, action.index);
  }
  if (action.type === 'COMPLETE_TODO') {
    return completeTodo(state, action.index);
  }
  if (action.type === 'ADD_TODO') {
    return addTodo(state, action.todo);
  }
  if (action.type === 'SET_SHOW_COMPLETED') {
    return setShowCompleted(state, action.showCompleted);
  }

  return state;
}

const deleteTodo = (state, index) => {
  const todos = state.todos.filter((todo, tIndex) => {
    return index !== tIndex;
  });
  return {...state, todos}
}

const completeTodo = (state, index) => {
  let completed = [...state.completed];
  const todos = state.todos.filter((todo, tIndex) => {
    if (index === tIndex){
      completed.push(todo);
      return false;
    }
    return true;
  })
  return {...state, todos, completed};
}

const addTodo = (state, todo) => {
  const newTodos = [...state.todos, todo];
  return {...state, todos: newTodos};
}

const setShowCompleted = (state, showCompleted) => {
  return {...state, showCompleted};
}

export default rootReducer;
