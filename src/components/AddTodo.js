import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    id: null,
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
          <h6>New todo:</h6>
          <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
        <button class="waves-effect waves-light btn-large">Submit</button>
        </form>
      </div>
    );
  }

}

export default AddTodo;
