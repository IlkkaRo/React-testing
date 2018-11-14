import React, { Component } from 'react';
import './App.css';
import Overview from './Overview';
import Branch from './Branch';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={Overview} />
      <Route path='/:branch' component={Branch} />
        <footer>
          <p>Lähde</p>

        </footer>
      </div>
    );
  }
}

export default App;
