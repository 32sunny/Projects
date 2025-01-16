import React, { useState } from 'react';
import './project.css';
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p1Main from '../assets/p1Main.png'
import port from '../assets/port.png'
import portC from '../assets/portC.png'
import portP from '../assets/portP.png'
import resp from '../assets/resp.png'

const Projects = () => {
  const [showDetails1, setShowDetails] = useState(false);
  const [showDetails2, setShowDetail2] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails1);
  };
  
  const toggleDetails2 = () => {
    setShowDetail2(!showDetails2);
  };
  return (
    <div id='Projects'>
      <h1>Projects</h1>
      <div className='project-card'>
     
        <div className='main-image'>
          <img
            src={p1Main}
            alt='Main Project'
            onClick={toggleDetails}
          />
        </div>
        <h2>Your PLace</h2>
     
        {showDetails1 && (
          <>
          <div className='code' ><a href='https://super-trifle-c14783.netlify.app/'> <img src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs3rytrmJIkL6KZHtrKE-zE79zn5v82d1Bw&s" alt="Live"/> Check Live Site</a> <a href='https://github.com/32sunny/Projects/tree/main/GameZone'>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github"/> Get Code</a></div>
          <div className='project-details'>
            <p>
            <span>Description</span>  : e-commerce platform is designed to provide a seamless shopping experience, offering a Filter options to Chosse products , friendly Ui,. We prioritize customer satisfaction with a user-friendly interface and round-the-clock support.
            </p>
            <h3>Tools Used</h3> 
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Firebase</li>
              <li>Html</li>
            </ul>
            <div className='additional-images'>
              <h3>Gallery</h3>
              <div className='image-grid'>
                <img src={p2} alt='Additional 1' />
                <img src={p3} alt='Additional 2' />
                <img src={p4} alt='Additional 3' />
                <img src={p5} alt='Additional 4' />
              </div>
            </div>
          </div>
          </>
        )}
        
      </div>
      <div className='project-card'>
     
     <div className='main-image'>
       <img
         src={port}
         alt='Main Project'
         onClick={toggleDetails2}
       />
     </div>
     <h2>PortFolio</h2>
  
     {showDetails2 && (
       <>
       <div className='code' ><a href=''> <img src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs3rytrmJIkL6KZHtrKE-zE79zn5v82d1Bw&s" alt="github"/> Check Live Site</a> <a href=''>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github"/> Get Code</a></div>
       <div className='project-details'>
         <p>
         <span>Description</span>  :A responsive portfolio website designed to work well on all devices. It includes interactive features like project galleries and animations, an "About" section with key details, project showcases with images and videos, a contact form.
         </p>
         <h3>Tools Used</h3> 
         <ul>
           <li>React</li>
           <li>CSS</li>
           <li>JavaScript</li>
           <li>Html</li>
           <li>Chakra UI</li>      
         </ul>
         <div className='additional-images'>
           <h3>Gallery</h3>
           <div className='pic'>
           <div className='image-pic'>
             <img src={port} alt='Additional 1' />
             <img src={portC} alt='Additional 2' />
          
           </div>
           <img src={resp} alt='Additional 4' id='cla' />
         </div>
      
         </div>
    
       </div>
       </>
     )}
     
   </div>




    </div>
   
  );
};

export default Projects;
