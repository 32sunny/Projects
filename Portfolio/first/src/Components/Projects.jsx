import React, { useState } from 'react';
import './project.css';
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p1Main from '../assets/p1Main.png'
import main from '../assets/main_section_home.png'
import login from '../assets/login.png'
import navbar from '../assets/navbar.png'
import feedback from '../assets/feedback.png'
import about from '../assets/AboutUs.png'
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
        <div className="about-title">
      
      <h1>Projects</h1>
  
      </div>
     
      <div className='project-card'>
     
     <div className='main-image'>
       <img
         src={main}
         alt='Main Project'
         onClick={toggleDetails2}
       />
     </div>
     <h2>Sweet Home Real Estate</h2>
  
     {showDetails2 && (
       <>
       <div className='code' ><a href='https://easy-buy-or-rent.netlify.app/' target='blank'>  Check Live Site</a> <a href='https://github.com/ashwanistudy/Easy_Buy_or_Rent' target='blank'>    Get Code</a></div>
       <div className='project-details'>
         <p>
         <span>Description</span>  :Created a modern real estate platform using React with focus on comfort and style.
Implemented API integration along with filtering and sorting for easy property searches.
Designed a form-friendly UI ensuring smooth user interactions.
Utilized Firebase to manage data, enabling a seamless user experience.
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
           <div className='image-grid'>
             <img src={login} alt='Additional 1' />
             <img src={navbar} alt='Additional 2' />
             <img src={about} alt='Additional 2' />
             <img src={feedback} alt='Additional 2' />
           </div>
         
         </div>
      
         </div>
    
       </div>
       </>
     )}
     
   </div>

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
       <div className='code' ><a href='https://super-trifle-c14783.netlify.app/' target='blank'> Check Live Site</a> <a href='https://github.com/32sunny/Projects/tree/main/GameZone' target='blank'> 
          GitHub Link</a></div>
       <div className='project-details'>
         <p>
         <span>Description</span>  : E-commerce platform is designed to provide a seamless shopping experience, offering a Filter options to Choose products , friendly Ui,. We prioritize customer satisfaction with a user-friendly interface and round-the-clock support.
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


    </div>
   
  );
};

export default Projects;
