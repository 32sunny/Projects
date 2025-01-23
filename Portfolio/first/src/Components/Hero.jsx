import React, { useState, useEffect } from 'react';
import './Hero.css';
import resume from '../assets/resume.pdf';
import photo from '../assets/photo_logo.png'

const Hero = () => {
 
  return (
    <div id='Home' className="Hero">

<div className="myprofile">
        <img src={photo} className="profile" alt="Profile" />
      </div>

<div className="wave-container">


    
 
    
        Hello<span className="wave-text"></span> I'm 
         <h1><span>Sunny Mourya</span><br/> Full-Stack Web Developer
    
      <h5>Welcome to my portfolio!<br/>
      Let's connect and explore the world of coding together!"</h5>
      <div className="heroconnect">  
        <a href="#contact" className='see'>Connect with me</a>  

       <a href={resume} download="resume"  className='see2'>

         Resume
       </a>

   </div>
      </h1>
     
      </div>

    
   
     
    </div>
  );
};
 
export default Hero;
