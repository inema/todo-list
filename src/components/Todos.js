import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteTodo, completeTodo} from '../actions/todoActions';

class Todos extends Component {
    getTodoList = () => { return this.props.todos.length ? (this.props.todos.map((todo, index) => {
      return (
        <div className="todos collection" key={index}>
          <div className="collection-item">{todo.content}
            <button className="secondary-content red darken-1 waves-effect waves-light btn-small" onClick={() => this.props.deleteTodo(index)}>Delete</button>
            <button className="secondary-content waves-effect waves-light btn-small" onClick={() => this.props.completeTodo(index)}>Complete</button>
          </div>
        </div>
      );
    })) : (
      <p>You have no todo's!</p>
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
