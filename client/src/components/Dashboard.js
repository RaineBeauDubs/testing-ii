import React from 'react';

const Dashboard = props => {
    return (
      <div>
        <div>
          <button onClick={props.incrementStrikes}>STRIKE</button>
          <button onClick={props.incrementBalls}>BALL</button>
          <button onClick={props.incrementFoul}>FOUL</button>
          <button onClick={props.recordHit}>HIT</button>
        </div>
      </div>
    )
}

export default Dashboard;