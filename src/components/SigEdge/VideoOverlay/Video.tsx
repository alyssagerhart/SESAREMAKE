import React from 'react';
import './Video.css';

export const Video: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/sesa-f250c.appspot.com/o/pexels-edmond-dant%C3%A8s-8643486%20(2160p).mp4?alt=media&token=7335db1a-4e22-4670-a154-d302ed4c8367" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1>Launch Your Career In Tech Sales</h1>
        <p>Optimize Your Job Search, Ace Your Interviews, and Start Your New Career</p>
        <a href='/SignUp'>
          <button className="start-button">Start For Free</button>
        </a>
      </div>
    </div>
  );
};

export default Video;

