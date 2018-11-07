import React, { Component } from 'react';
import './Gameover.css';

class Gameover extends Component {
  render() {
    const score = this.props.scoreCallback();
    if (score < 20) {
    return(
      <div id="overlay">
        <div id="gameover">Your score: <br/>{score}</div>
      </div>
    );
  } else {
    return(
      <div id="overlay">
        <div id="gameover2">Pro skills: <br/>{score}</div>
      </div>
    );
  }
}
}

export default Gameover;
