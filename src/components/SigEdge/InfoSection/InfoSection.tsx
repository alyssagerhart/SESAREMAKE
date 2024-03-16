import React from 'react';
import './InfoSection.css';

export const InfoSection: React.FC = () => {
  return (
    <div className="info-section">
      {/* Add the video element with the source to your background video */}
      <video autoPlay loop muted className="background-video">
        <source src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/pexels-rostislav-uzunov-8303104%20(Original).mp4?alt=media&token=ae3aa1e9-ac5c-4514-aaf1-6036b0e5f85c" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Your content goes here */}
      <div className="info-content">
        <div className="info-item">
          <h1>18,000</h1>
          <p>Open Tech Sales Jobs</p>
        </div>
        <div className="info-item">
          <h2>$70,000</h2>
          <p>Average Starting Salary</p>
        </div>
        <div className="info-item">
          <h2>9%</h2>
          <p>Expected Growth In Tech Sales Professionals</p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
