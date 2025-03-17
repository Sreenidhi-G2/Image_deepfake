import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/result.css';

const ResultPage = () => {
  const location = useLocation();
  const { result, imageUrl } = location.state || {};

  // If no result, redirect to home
  if (!result) {
    return (
      <div className="result-page no-result">
        <h2>No Analysis Result</h2>
        <p>Please upload an image to analyze first.</p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    );
  }

  // Log the result for debugging
  console.log("API Result:", result);

  // Assuming result has properties like: 
  // { confidence: number, heatmap: string (base64) }
  const { confidence, heatmap } = result;

  // Determine if the image is fake or real based on confidence
  const isDeepfake = confidence === 1; // 1 = fake, 0 = real

  // Log the isDeepfake value for debugging
  console.log("isDeepfake:", isDeepfake);

  // Calculate confidence percentage
  const confidencePercentage = (confidence * 100).toFixed(2);

  return (
    <div className="result-page">
      <h1>Analysis Results</h1>

      <div className="result-container">
        <div className="image-container">
          <div className="original-image">
            <h3>Original Image</h3>
            <img src={imageUrl} alt="Uploaded" />
          </div>

          {heatmap && (
            <div className="heatmap-image">
              <h3>Detection Heatmap</h3>
              <img src={heatmap} alt="Heatmap" />
            </div>
          )}
        </div>

        <div className="analysis-results">
          <div className={`result-box ${isDeepfake ? 'fake' : 'real'}`}>
            <h2>Detection Result:</h2>
            <p className="verdict">{isDeepfake ? 'DEEP FAKE DETECTED' : 'LIKELY AUTHENTIC'}</p>
            <div className="confidence-meter">
              {/* <p>Confidence: {confidencePercentage}%</p> */}
              <div className="meter">
                <div 
                  className="meter-fill" 
                  style={{ width: `${confidencePercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <h3>What This Means</h3>
            {isDeepfake ? (
              <p>
                This image shows signs of artificial manipulation consistent with deep fake 
                technology. The areas highlighted in the heatmap indicate regions where 
                our model detected inconsistencies.
              </p>
            ) : (
              <p>
                This image appears to be authentic with no significant signs of manipulation 
                detected by our model. However, please note that no detection system is 100% 
                accurate, especially with advanced deep fakes.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="actions">
        <Link to="/" className="back-button">Analyze Another Image</Link>
      </div>
    </div>
  );
};

export default ResultPage;