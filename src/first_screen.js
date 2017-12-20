import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class FirstScreen extends Component {
  render() {
    return (
      <div data-content_main-root class="content-module">
        <div class="textalign-center">
            <p>Hi, I'm Luka Pavlovic</p>
            <p>Computer Engineering</p>
            <p>University of Waterloo</p>
            <p>Available September - December 2017</p>
            <p data-content_main-ws></p>
        </div>
      </div>
    )
  }
}

export default FirstScreen;
