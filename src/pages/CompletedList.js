import React, { Component } from 'react';
import Completed from '../components/Completed.js';

class CompletedList extends Component {

    render () {
      return (
      <div className="completed-list container">
        <Completed />
      </div>
    );
    }
}

export default CompletedList;
