import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Score from './score';
import Gameover from './Gameover';

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

class App extends Component {
  state = {
    activeButton: 0,
    buttonList: [],
    clicks : 0,
    showGameover: false,
    showStartgame: true
  }

timerId = undefined;
delay = 1000;

  clicKity = (btnId) => {
    console.log("Click", btnId);
    if(!(btnId === this.state.buttonList[0])) {
      //game over
      this.gameover();
      return;
    }
    this.setState( prevState => {
      return {
      buttonList: prevState.buttonList.slice(1),
      clicks: prevState.clicks + 1
    };
  });
}
  gameover = () => {
    clearTimeout(this.timerId);
    this.setState({
      showGameover: true
    });
  }

  next = () => {
    //Check for Gameover
    if(this.state.buttonList.length >= 10) {
      this.gameover();
      return;
    }
    //next active Button
    let nextActive = undefined;
    do {
      nextActive = getRandomInt(1,4) ;
    } while (nextActive === this.state.activeButton);

    let newList = this.state.buttonList;
    newList.push(nextActive);
    //update active button state
    this.setState({
      activeButton: nextActive,
      buttonList: newList
    });
    // set timer for next activation
    this.delay *= 0.97;
    this.timerId = setTimeout( this.next, this.delay);
  }

  startCallback = () => {
    this.next();
    this.setState({
      showStartgame: false,
    })
  }

  scoreCallback = () => {
    return this.state.clicks;
  }

  render() {
    return (
      <div className="App">
        <Score score = { this.state.clicks } />
        <main className="button-container">
          <Button buttonColor='green' active={ this.state.activeButton === 1 } clickHandler={ () => { this.clicKity(1); }}/>
          <Button buttonColor='blue' active={ this.state.activeButton === 2 } clickHandler={ () => { this.clicKity(2); }}/>
          <Button buttonColor='yellow' active={ this.state.activeButton === 3 } clickHandler={ () => { this.clicKity(3); }}/>
          <Button buttonColor='darkorange' active={ this.state.activeButton === 4 } clickHandler={ () => { this.clicKity(4); }}/>
          { this.state.showGameover && <Gameover scoreCallback={ this.scoreCallback } /> }
        </main>
        { this.state.showStartgame && <button id="startgame" onClick={ this.startCallback }>Start Game</button>}
      </div>
    );
  }
}

export default App;
