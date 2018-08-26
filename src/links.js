import React, { Component } from 'react';
import './css/links.css';
import github_icon from './icons/github.png';
import linkedin_icon from './icons/linkedin.png';
import resume_icon from './icons/resume.png';

class Links extends Component {
  render() {
    return (
      <div className="link-container">
        <a target="_blank" href="/resume.pdf">
          <img className="resume" alt="Resume" src={resume_icon} />
        </a>
        <a href="https://github.com/lpavlovi">

          <img className="github" alt="Github" src={github_icon} />
        </a>

        <a href="https://www.linkedin.com/in/lukapavlovic/">
          <img className="linkedin" alt="LinkedIn" src={linkedin_icon} />
        </a>
      </div>
    )
  }
}
export default Links;
