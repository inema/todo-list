import React, { Component } from 'react';

class ToggleCompleted extends Component {
  state = {
    completedButtonText : "Show Completed"
  }

  onClick = () => {
    let completedButtonText = !this.props.showCompleted ? "Hide Completed" : "Show Completed";
    this.props.setShowCompleted(!this.props.showCompleted);
    this.setState({completedButtonText});
  }

  render() {
    return (
      <div>
      <br/>
      <button class="waves-effect waves-light btn deep-purple lighten-3" onClick={this.onClick}>{this.state.completedButtonText}</button>
      </div>
    );
  }

}

export default ToggleCompleted;
