import React, { Component } from 'react';
import './Gameover.css';

class Gameover extends Component {
  render() {
    if (0 < 20) {
    return(
      <div id="overlay">
        <div id="gameover">{ this.props.scoreCallback() }</div>
      </div>
    );
  } else {
    return(
      <div id="overlay">
        <div id="gameover2">{ this.props.scoreCallback() }</div>
      </div>
    );
  }
}
}

export default Gameover;
