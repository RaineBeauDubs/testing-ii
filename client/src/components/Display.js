import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0
    }
  }

  render() {
    return (
      <div>
        <h2>At Bat:</h2>
        <div>
          <div>
            <h3>STRIKES</h3>
            <h3>{this.state.strikes}</h3>
          </div>
          <div>
            <h3>BALLS</h3>
            <h2>{this.state.balls}</h2>
          </div>
        </div>
        <Dashboard />
      </div>
    )
  }
}

export default Display;