import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Score from './score';
import Gameover from './Gameover';

class App extends Component {
  state = {
    activeButton: 0,
    clicks : 0
  }

  clicKity = (btnId) => {
    console.log("Click", btnId);
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  next() {
    //next active Button
    let nextActive = 1+ (this.state.activeButton + 1) %4 ;
    //update active button state
    this.setState({
      activeButton: nextActive
    });
    // set timer for next activation
    setTimeout(this.next.bind(this), 1000);
  }

  componentDidMount() {
    this.next();
  }

  render() {
    return (
      <div className="App">
        <Score score = { this.state.clicks } />
        <main className="button-container">
          <Button label = "W" active={ this.state.activeButton === 1 } clickHandler={ () => {this.clicKity(1); }}/>
          <Button label = "A" active={ this.state.activeButton === 2 } clickHandler={ () => {this.clicKity(2); }}/>
          <Button label = "S" active={ this.state.activeButton === 3 } clickHandler={ () => {this.clicKity(3); }}/>
          <Button label = "D" active={ this.state.activeButton === 4 } clickHandler={ () => {this.clicKity(4); }}/>
          <Gameover />
        </main>
      </div>
    );
  }
}

export default App;
