import React, { Component } from 'react';

import Navigation from './Navigation';

const LINKS = [
  { label: 'Linkedin', to: 'https://linkedin.com/in/ilkkaro/' },
  { label: 'Github', to: 'https://github.com/IlkkaRo' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Navigation links={LINKS} />
      </div>
    );
  }
}

export default App;
