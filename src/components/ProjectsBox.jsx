import React from 'react';

const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>

      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>15+ Finished Projects</label>
        </div>

        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Ongoing</h3>
          <label>5+ Active Projects</label>
        </div>

        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Upcoming</h3>
          <label>3 Upcoming Projects</label>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
