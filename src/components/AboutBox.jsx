import React from 'react';
import information from '../assets/download/information.pdf';

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>

      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              I am a dedicated Software Engineer with experience in developing web applications and solving technical challenges.
            </p>
            <div className="about-btn">
              <a href={information} target="_blank" rel="noopener noreferrer">
                <button className="btn">
                  Download CV <i className="uil uil-download-alt"></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>React</span>
              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>HTML & CSS</span>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>Node.js</span>
              <span>PHP</span>
              <span>Python</span>
              <span>Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBox;
