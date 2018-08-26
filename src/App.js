import React, { Component } from 'react';
import Name from './name';
import ShortIntro from './short_intro';
import Links from './links';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name/>
        <ShortIntro/>
        <Links/>
      </div>
    );
  }
}

export default App;
