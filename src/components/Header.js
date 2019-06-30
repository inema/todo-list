import React, {Component} from 'react';
import Weather from './Weather.js';

class Header extends Component {
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">Todo List</h1>
        <Weather />
      </div>
    );
  }
}

export default Header;
