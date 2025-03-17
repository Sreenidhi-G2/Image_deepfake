import React, { useState, useEffect } from 'react';
import '../styles/Disclamer.css';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  // No longer checking localStorage - always show on page load/refresh
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-popup">
        <h2>Important Disclaimer</h2>
        <div className="disclaimer-content">
          <p>
            <strong>Please be aware that our deep fake detection model is not 100% accurate.</strong>
          </p>
          <p>
            While we strive to provide the most accurate analysis possible, the technology for 
            both creating and detecting deep fakes is continuously evolving. Our model may 
            occasionally:
          </p>
          <ul>
            <li>Identify authentic images as deep fakes (false positives)</li>
            <li>Miss sophisticated deep fakes and classify them as authentic (false negatives)</li>
          </ul>
          <p>
            We recommend using this tool as one of several methods to verify image authenticity,
            rather than relying solely on its results for critical decisions.
          </p>
        </div>
        <div className="disclaimer-actions">
          <button onClick={handleAccept} className="accept-button">
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;