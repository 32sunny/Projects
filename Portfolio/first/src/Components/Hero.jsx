import React, { useState, useEffect } from 'react';
import './Hero.css';
import DP from '../assets/Dp.png'
import resume from '../assets/resume.pdf';

const Hero = () => {
 
  return (
    <div id='Home' className="Hero">
      <div className="myprofile">
        <img src={DP} className="profile" alt="Profile" />
      </div>

      <h1>
        <span> Hi,I'm Sunny Mourya</span>, Full-Stack Developer With B.Com Degree
      </h1>
      <p>
      "I graduated with a degree in B.Com, but I wasn’t satisfied with my chosen field. Determined to explore new opportunities, I decided to venture into coding. Although it was challenging at first, my passion for learning and the excellent guidance from Masai School kept me motivated. Today, I am proud to call myself a Full-Stack Developer."
      </p>
      <div className="hero-action">
        <div className="heroconnect">  <a href="#contact">Connect With Me</a></div>
        <button className="My-resume">
          <a href={resume} download="resume" style={{ textDecoration: 'none' }}>
            Resume{" "}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
          </a>
        </button>
      </div>

     
    </div>
  );
};

export default Hero;
