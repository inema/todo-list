import React, {Component} from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Completed from './components/Completed.js';
import ToggleCompleted from './components/ToggleCompleted.js';

class App extends Component {
  state = {
    todos : [
      { id: 1, content: 'buy some almond milk'},
      { id: 2, content: 'play board games'}
    ],
    completed : [],
    showCompleted : false
  }
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return id !== todo.id;
    })
    this.setState({todos});
  }

  completeTodo = (id) => {
    let completed = [...this.state.completed];
    let todos = this.state.todos.filter(todo => {
      if (id === todo.id){
        completed.push(todo);
        return false;
      }
      return true;
    })
    this.setState({todos, completed});
  }

  setShowCompleted = showCompleted => {
    this.setState({showCompleted});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
        <Completed showCompleted={this.state.showCompleted} completed={this.state.completed}/>
        <AddTodo addTodo={this.addTodo}/>
        <ToggleCompleted showCompleted={this.state.showCompleted} setShowCompleted={this.setShowCompleted}/>
      </div>
    );
  }
}

export default App;
