import React, {Component} from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Completed from './components/Completed.js';
import ToggleCompleted from './components/ToggleCompleted.js';

class App extends Component {
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Todo List</h1>
        <Todos/>
        <Completed/>
        <AddTodo/>
        <ToggleCompleted/>
      </div>
    );
  }
}

export default App;
