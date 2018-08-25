import React, { Component } from 'react';
import './css/picture_frame.css';

class PictureFrame extends Component {
  render() {
    return (
      <div className="frame">
        <div style={{borderColor:this.props.color, "color":this.props.color}}>
          {this.props.name}
        </div>
        <img
          src={this.props.image}
          alt="This is a small picture">
        </img>
      </div>
    )
  }
}

export default PictureFrame;
