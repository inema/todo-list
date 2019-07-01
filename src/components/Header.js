import React, {Component} from 'react';
import Weather from './Weather.js';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    const title = window.location.pathname === '/completed' ? "Completed List" : "Todo List";
    this.state = {title: title};
  }

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
  setTitle = () => {
    const title = window.location.pathname === '/completed' ? "Completed List" : "Todo List";
    this.setState({title});
  }

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
