// src/video player/VideoPlayer.tsx
import React from 'react';
import DownArrow from '../Down Arrow/DownArrow';
import './VideoPlayer.css';
import AnimatedText from '../AnimatedText/AnimatedText';
import Navbar from '../Nav Bar/Layout';
const VideoPlayer: React.FC = () => {
  return (
    
    <div className="video-container">
      
      <video className="fullscreen-video" autoPlay muted loop controls={false}>
        <source src={process.env.PUBLIC_URL + '/sample.mp4'} type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>
      
      <AnimatedText firstText="DAY OUT" secondText='HOLLYDAYS' subText="Delivering your Travel Experiences" animate={true} />
      
      <DownArrow />
    </div>
  );
};

export default VideoPlayer;
