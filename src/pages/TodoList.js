import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos.js';
import AddTodo from '../components/AddTodo.js';
import Completed from '../components/Completed.js';
import ToggleCompleted from '../components/ToggleCompleted.js';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-app container">
        <Todos />
        {this.props.showCompleted ? <Completed /> : null}
        <AddTodo />
        <ToggleCompleted />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showCompleted: state.showCompleted
  }
}

export default connect(mapStateToProps)(TodoList);
