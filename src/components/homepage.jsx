import React from 'react';
import ImageUploader from './uploadImage';
import '../styles/homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Deep Fake Image Detection</h1>
        <p>Upload an image to detect if it's a deep fake using our advanced CNN model</p>
      </div>
      
      <div className="upload-section">
        <ImageUploader />
      </div>
      
      <div className="info-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload</h3>
            <p>Select and upload an image you want to analyze</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Process</h3>
            <p>Our CNN model analyzes the image for signs of manipulation</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Results</h3>
            <p>View detailed results about the authenticity of the image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;