import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (todos.map(todo => {
      return (
        <div className="todos collection" key={todo.id}>
          <div>{todo.content}</div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      );
    })) : (
      <p className="center">You have no todo's left!</p>
    )
    return (
      <div className="todo-list">
        {todoList}
      </div>
    );
}

export default Todos;
