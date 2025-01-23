import React from 'react'
import './skill.css'


const Skills = () => {


    let skillSet = [
        { name: "HTML", img: "https://cdn-icons-png.flaticon.com/256/174/174854.png", borderColor: "rgb(255, 87, 34)" },
        { name: "CSS", img: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png", borderColor: "rgb(33, 150, 243)" },
        { name: "JavaScript", img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", borderColor: "rgb(255, 193, 7)" },
        { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png", borderColor: "rgb(93, 201, 76)" },
        {    name: "Express.js", 
          img: "https://cdn.iconscout.com/icon/free/png-256/express-3521595-2945058.png", 
          borderColor: "rgb(156, 39, 176)" 
        },  
        { name: "React JS", img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256", borderColor: "rgb(76, 175, 80)" },
        { name: "Redux", img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", borderColor: "rgb(244, 67, 54)" },
        { 
          name: "Tailwind CSS", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-tailwindcss-3521829-2945278.png", 
          borderColor: "rgb(56, 189, 248)" 
        },
        
        { name: "Chakra UI", img: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png", borderColor: "rgb(103, 58, 183)" },
        { 
          name: "Mongo DB", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png", 
          borderColor: "rgb(76, 175, 80)" 
        },
    
      ];
    
      let tools = [
        { 
          name: "VS Code", 
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw1e_BUF94tqvmJWuXqHzbCG-nP0ONdK4rA&s", 
          borderColor: "rgb(63, 81, 181)" 
        },  
        { name: "Slack", img: "https://cdn-icons-png.flaticon.com/512/5968/5968871.png", borderColor: "rgb(74, 20, 140)" },
        { 
          name: "GitHub", 
          img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", 
          borderColor: "rgb(33, 150, 243)" 
        },
        { 
          name: "Netlify", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3029193.png", 
          borderColor: "rgb(0, 200, 83)" 
        },
        { 
          name: "Postman", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png", 
          borderColor: "rgb(255, 87, 34)" 
        },
        { 
          name: "Firebase", 
          img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBwq1RrWCvEBjqWcXcvMGzk_4WBRFx2JRyg&s ", 
          borderColor: "rgb(255, 193, 7)" 
        },
        { 
          name: "Mongo DB", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png", 
          borderColor: "rgb(76, 175, 80)" 
        },
        { 
          name: "MySQL", 
          img: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png", 
          borderColor: "rgb(0, 121, 191)" 
        }
      ];
      
  return (
    <>
        <div  className="about">
    <div id='Skills'  className="about-title">
      
    <h1>Technical Skills</h1>

    </div>
    <div  className="skills-container">
      
      {skillSet.map((item, id) => (
        <div key={id} className="skill-item" style={{ borderColor: item.borderColor }}>
          <img src={item.img} alt={item.name} />
          {item.name}
        </div>
      ))}
    </div>

   

    <div id='Skills'  className="about-title">
      
    <h1>Tools</h1>

    </div>
    <div className="skills-container">
    {tools.map((item, id) => (
        <div key={id} className="skill-item" style={{ borderColor: item.borderColor }}>
          <img src={item.img} alt={item.name} />
          {item.name}
        </div>
      ))}
    </div>



    </div>
    </>
  )
}

export default Skills
