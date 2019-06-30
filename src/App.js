import React, {Component} from 'react';
import NavBar from './components/NavBar.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header.js';
import TodoList from './pages/TodoList.js';
import CompletedList from './pages/CompletedList.js';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <NavBar />
      <Header />
    <Route exact path='/' component={TodoList} />
      <Route path='/completed' component={CompletedList} />
    </BrowserRouter>
    );
  }
}

export default App;
