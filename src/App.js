import React, { Component } from 'react';
import Name from './name';
import ShortIntro from './short_intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name/>
        <ShortIntro/>
      </div>
    );
  }
}

export default App;
