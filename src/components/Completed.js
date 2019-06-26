import React from 'react';

const Completed = ({completed, showCompleted}) => {
    const completedList = completed.length ? (completed.map(done => {
      return (
        <div className="completed collection" key={done.id}>
          <div class="collection-item grey lighten-4">{done.content}</div>
        </div>
      );
    })) : (
      <p>You have not completeed any todo's!</p>
    )
    return showCompleted ? (
      <div className="completed-list">
        {completedList}
      </div>
    ): null;
}

export default Completed;
