import React, { Component } from 'react';
import './css/name.css';
import photo_list from './photo_list';

class ShortIntro extends Component {
  render() {
    const images = photo_list.map((photo) =>
      <img
        key={photo.alt}
        src={photo.small}
      />
    );
    const single_image = images[0];
    const hidden_images = photo_list.map((photo) =>
      <img
        style={{display: 'none'}}
        key={photo.alt}
        src={photo.default}
      />
    );
    return (
      <div className="short-intro">
        <p>I went on a small trip</p>
        <p>and I took some pictures</p>
        {single_image}
        {hidden_images}
      </div>
    )
  }
}

export default ShortIntro;
