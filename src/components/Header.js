import React, {Component} from 'react';
import Weather from './Weather.js';
import { withRouter } from 'react-router-dom';
import HeaderClass from "../constants/HeaderClass.js"

class Header extends Component {
  constructor(props){
    super(props);
    const title = this.getTitle(window.location.pathname);
    this.state = {title};
  }
  componentWillMount() {
      const { history } = this.props;
      console.log(history.location);
      /*
      history.listen takes in a function with two parameters, location and action.
      location contains the current location.
      action contains the last navigation action.
      ---
      Can write without arrow function and it will still work since the function
      will have access to location and action params as long as arguments are set up
      appropriately. See below:
      history.listen(this.handleLocationChange);
      */
      history.listen(location => {this.handleLocationChange(location)});
    }

  handleLocationChange = (location) => {
    console.log(location);
    this.setTitle(location.pathname);
  }

  getTitle = (pathname) => {
    const {completedPath, completedTitle, todoTitle} = HeaderClass;
    return pathname === completedPath ? completedTitle : todoTitle;
  }

  setTitle = (pathname) => this.setState({title: this.getTitle(pathname)});

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
