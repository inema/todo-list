import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content === '') return;
    this.props.addTodo(this.state);
    this.setState({content: ''});
  }
  render() {
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <h5>New todo:</h5>
          <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
        <button className="waves-effect waves-light btn-large">Submit</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => { dispatch (addTodo(todo))}
  }
}

export default connect(state => {return {}}, mapDispatchToProps)(AddTodo);
