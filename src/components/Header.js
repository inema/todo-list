import React, {Component} from 'react';
import Weather from './Weather.js';
import { withRouter } from 'react-router-dom';
import HeaderClass from "../constants/HeaderClass.js"

class Header extends Component {
  state = {title: this.getTitle};

  componentWillMount() {
      const { history } = this.props;
      console.log(history);
      //TODO: what is this??
      this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
      this.handleLocationChange(history.location);
    }

  handleLocationChange = (location) => {
    console.log(location);
    this.setTitle();
  }

  getTitle = () => {
    const {completedPath, completedTitle, todoTitle} = HeaderClass;
    return window.location.pathname === completedPath ? completedTitle : todoTitle;
  }

  setTitle = () => this.setState({title: this.getTitle()});

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center teal-text">{this.state.title}</h1>
        <Weather />
      </div>
    );
  }
}

export default withRouter(Header);
