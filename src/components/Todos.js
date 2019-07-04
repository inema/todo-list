import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteTodo, completeTodo} from '../actions/todoActions';
import TodoClass from "../constants/TodoClass.js"

class Todos extends Component {
    getTodoList = () => {
      const {deleteText, completeText, noTodoText} = TodoClass;
      return this.props.todos.length ? (this.props.todos.map((todo, index) => {
        return (
          <div className="todos collection" key={index}>
            <div className="collection-item">{todo.content}
              <button className="secondary-content red darken-1 waves-effect waves-light btn-small" onClick={() => this.props.deleteTodo(index)}>{deleteText}</button>
              <button className="secondary-content waves-effect waves-light btn-small" onClick={() => this.props.completeTodo(index)}>{completeText}</button>
            </div>
          </div>
        );
    })) : (
      <p>{noTodoText}</p>
    )}

    render() {
      return (
        <div className="todo-list">
          {this.getTodoList()}
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: index => { dispatch (deleteTodo(index))},
    completeTodo: index => { dispatch (completeTodo(index))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
