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

  incrementStrikes = () => {
    if (this.state.strikes < 3) {
      return (
        this.setState(prevState => ({
          strikes: ++prevState.strikes
        }))
      )
    } else {
      return (
        this.setState(() => ({
          strikes: 0,
          balls: 0
        }))
      )
    }
  }

  incrementBalls = () => {
    if (this.state.balls < 4) {
      return (
        this.setState(prevState => ({
          balls: ++prevState.balls
        }))
      )
    } else {
      return (
        this.setState(() => ({
          strikes: 0,
          balls: 0
        }))
      )
    }
  }

  render() {
    return (
      <div>
        <h2>At Bat:</h2>
        <div>
          <div>
            <h3>STRIKES</h3>
            <h2>{this.state.strikes}</h2>
          </div>
          <div>
            <h3>BALLS</h3>
            <h2>{this.state.balls}</h2>
          </div>
        </div>
        <Dashboard 
          incrementStrikes={this.incrementStrikes} 
          incrementBalls={this.incrementBalls}
        />
      </div>
    )
  }
}

export default Display;