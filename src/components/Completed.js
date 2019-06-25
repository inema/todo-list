import React from 'react';

const Completed = ({completed}) => {
    const completedList = completed.length ? (completed.map(done => {
      return (
        <div className="completed collection" key={done.id}>
          <div>{done.content}</div>
        </div>
      );
    })) : (
      <p className="center">You have not completeed any todo's!</p>
    )
    return (
      <div className="completed-list">
        {completedList}
      </div>
    );
}

export default Completed;
