import React from 'react'
import './About.css'

const About = () => {
 

  return (
    <>
     

      <div id="about" className="about">

      <div   className="about-title">
      
      <h1>About Me</h1>
  
      </div>

<div className='anoutme '>
         


            <div className="about-para">

            <p><span className="wave-start"></span> {" "}I am a Full Stack MERN Developer specializing in React and Node.js.
             With a strong passion for learning and problem-solving, I confidently build software solutions independently. I thrive on creating clean, 
            intuitive, and user-friendly designs that exceed client expectations and enhance user engagement.</p><br /><br />

            </div>
        
            <div className="education">
        <h2> ✒️Education</h2>    
        <ul>
          <li>
            <strong>Full Stack Development
            
</strong>  <br />  <br />Masai School <br />
July 2024-present
     
          </li>
          <li>
            <strong>Bachelor of Commerce<br/> <br />
</strong> Gujranwala Guru Nanak Institute
of Management  and Technology <br />
April 2021 - April 2024
          
          </li>
   
        </ul>
      </div>
            </div>


      </div>
   </>
  );
}

export default About;