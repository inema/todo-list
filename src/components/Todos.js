import React from 'react';

const Todos = ({todos, deleteTodo, completeTodo}) => {
    const todoList = todos.length ? (todos.map(todo => {
      return (
        <div className="todos collection" key={todo.id}>
          <div class="collection-item">{todo.content}
            <button class="secondary-content red darken-1 waves-effect waves-light btn-small" onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button class="secondary-content waves-effect waves-light btn-small" onClick={() => completeTodo(todo.id)}>Complete</button>
          </div>
        </div>
      );
    })) : (
      <p>You have no todo's!</p>
    )
    return (
      <div className="todo-list">
        {todoList}
      </div>
    );
}

export default Todos;
