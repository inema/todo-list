import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    id: null,
    content: null
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({content: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New todo:</label>
          <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default AddTodo;
