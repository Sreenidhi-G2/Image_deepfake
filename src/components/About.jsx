import React from 'react';
import '../styles/about.css'; // Import the updated CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>
      <div className="about-content">
        <p className="about-text">
          This project was inspired by my participation in the <span className="highlight">PES CIDECODE Hackathon</span>. During the hackathon, I developed an initial version of this idea, which aimed to solve a specific problem. However, after the hackathon, I realized there was room for improvement, especially in terms of accuracy and performance.
        </p>
        <p className="about-text">
          This version you see here is an <span className="highlight">upgraded iteration</span> of that original idea. I have worked on enhancing the algorithms, refining the user experience, and improving the overall accuracy of the solution. The goal is to provide a more robust and reliable tool that can be used in real-world scenarios.
        </p>
        <p className="about-text">
          If you have any suggestions, feedback, or would like to collaborate, feel free to reach out to me on LinkedIn. I'm always open to new ideas and improvements!
        </p>
        <a
          href="https://www.linkedin.com/in/sreenidhi-g-4537382a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;