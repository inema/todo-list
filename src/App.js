import React, {Component} from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Completed from './components/Completed.js';

class App extends Component {
  state = {
    todos : [
      { id: 1, content: 'buy some almond milk'},
      { id: 2, content: 'play board games'}
    ],
    completed : [],
    showCompleted : false,
    completedButtonText : "Show Completed"
  }
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  deleteTodo = (id) => {
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

  toggleCompleted = () => {
    let showCompleted = !this.state.showCompleted;
    let completedButtonText = showCompleted ? "Hide Completed" : "Show Completed";
    this.setState({showCompleted, completedButtonText});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        {this.state.showCompleted ? <Completed completed={this.state.completed}/> : null}
        <AddTodo addTodo={this.addTodo}/>
        <button onClick={this.toggleCompleted}>{this.state.completedButtonText}</button>
      </div>
    );
  }
}

export default App;
