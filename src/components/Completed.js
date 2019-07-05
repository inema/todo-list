import React, { Component } from 'react';
import {connect} from 'react-redux';

class Completed extends Component {
    getcompletedList = () => {return this.props.completed.length ? (this.props.completed.map((done, index) => {
      return (
        <div className="completed collection" key={index}>
          <div className="collection-item grey lighten-4">{done.content}</div>
        </div>
      );
    })) : (
      <p>You have not completed any todo's!</p>
    )}

    render () {
      return (
      <div className="completed-list">
        {this.getcompletedList()}
      </div>
    );
    }
}


const mapStateToProps = state => {
  return {
    completed: state.completed,
    showCompleted: state.showCompleted
  }
}

export default connect(mapStateToProps)(Completed);
