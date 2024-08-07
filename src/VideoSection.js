import React from 'react';
import './VideoSection.css';
import videoSrc from './health.mp4'; // 비디오 파일 경로

const VideoSection = () => {

  
  return (
    <div className="video-section">
      <video className="video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>Think Your Health</h1>
        <p>"One pill could change your life!"</p>
      </div>
    </div>
  );
};


export default VideoSection;