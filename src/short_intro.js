import React, { Component } from 'react';
import './css/name.css'
import small_boat from './photos/small_boat.JPG';
import small_acropolis from './photos/small_acropolis.JPG';
import small_church from './photos/small_church.JPG';
import PictureFrame from './picture_frame';

/*
    <img src={small_boat} alt="This is a small boat"></img>
    <img src={small_acropolis} alt="This is acropolis"></img>
    <img src={small_church} alt="This is a small church"></img>
*/

class ShortIntro extends Component {
  render() {
    return (
      <div className="short-intro">
        <p>I went on a small trip</p>
        <p>and I took some pictures</p>
        <PictureFrame name="Budapest" image={small_church} color="#000000" />
        <PictureFrame name="Santorini" image={small_boat} color="#404d59" />
        <PictureFrame name="Athens" image={small_acropolis} color="#a0cbfe" />
      </div>
    )
  }
}

export default ShortIntro;
