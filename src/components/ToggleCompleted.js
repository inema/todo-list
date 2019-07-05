import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setShowCompleted} from '../actions/todoActions';
import TodoClass from "../constants/TodoClass.js"

class ToggleCompleted extends Component {
  state = {
    completedButtonText : TodoClass.showCompleted
  }

  onClick = () => {
    const {hideCompleted, showCompleted} = TodoClass;
    const completedButtonText = !this.props.showCompleted ? hideCompleted : showCompleted;
    this.props.setShowCompleted(!this.props.showCompleted);
    this.setState({completedButtonText});
  }

  render() {
    return (
      <div>
      <br/>
      <button className="waves-effect waves-light btn deep-purple lighten-3" onClick={this.onClick}>{this.state.completedButtonText}</button>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    showCompleted: state.showCompleted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setShowCompleted: showCompleted => { dispatch (setShowCompleted(showCompleted))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCompleted);
