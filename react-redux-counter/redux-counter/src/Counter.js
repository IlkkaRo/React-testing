import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div id="counter-container">
        <h2 class="font">Counter</h2>
        <div id="button-container">
          <button onClick={this.increment}>+</button>
          <span class="font">{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
