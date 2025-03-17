// components/ImageUploader.js (Updated)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import '../styles/uploadImage.css';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      // Check if file is an image
      if (!file.type.match('image.*')) {
        setError('Please select an image file');
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }
      
      setSelectedFile(file);
      setError(null);
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    
    if (!selectedFile) {
      setError('Please select an image to upload');
      return;
    }
    
    setIsLoading(true);
    setProgress(0);
    
    // Simulate progress - in a real app, this would come from the actual upload progress
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 90) {
          clearInterval(progressInterval);
          return 90; // Stop at 90% until actual completion
        }
        return newProgress;
      });
    }, 500);
    
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/api/detect/', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setProgress(100);
      clearInterval(progressInterval);
      
      const result = await response.json();
      
      // Navigate to results page with the result data
      navigate('/result', { state: { result, imageUrl: previewUrl } });
    } catch (error) {
      setError('Error uploading image: ' + error.message);
      clearInterval(progressInterval);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-uploader">
      <h2>Upload an Image</h2>
      <p>Select an image to analyze for deep fake detection</p>
      
      <form onSubmit={handleUpload}>
        <div className="file-input-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
            id="image-input"
          />
          <label htmlFor="image-input" className="file-input-label">
            Choose File
          </label>
          {selectedFile && (
            <span className="file-name">{selectedFile.name}</span>
          )}
        </div>
        
        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="image-preview" />
          </div>
        )}
        
        {error && <p className="error-message">{error}</p>}
        
        <button 
          type="submit" 
          className="upload-button"
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Image'}
        </button>
      </form>
      
      {isLoading && (
        <div className="loading-overlay">
          <LoadingSpinner message={`Analyzing image... ${progress}%`} />
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;