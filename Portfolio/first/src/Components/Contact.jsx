import React, { useState } from "react";
import "./ContactForm.css"; 

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "924ead74-c384-4b80-95b1-8b35a12f152e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <>
 

    <div id="contact" className="contact-form-container">
     
  

      <div className="contact-info">
        <h2 className="contact-title">Let's Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out to me. You can call or send an email, and I’ll
          get back to you as soon as possible.
        </p>
        <div className="contact-details">
          <p>
            <span role="img" aria-label="Location">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>
            </span>{" "}
            Ludhiana , Punjab (India)
          </p>
          <p>
            <span role="img" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            </span>{" "}
           sunnymourya5214@gmail.com
          </p>
          <p>
            <span role="img" aria-label="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M480-440v-360q0-17 11.5-28.5T520-840h280q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560H600L480-440Zm80-200h200v-120H560v120Zm0 0v-120 120Zm238 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            </span>{" "}
            +91 7814851430
          </p>
          
          <a href="https://www.linkedin.com/in/sunny-mourya-a5a22a326/" target="_blank">
            <img src="https://media.licdn.com/dms/image/v2/D4D12AQFSkkazpND0Tg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696901179396?e=2147483647&v=beta&t=sg_aDp3g51FrQdFdKqc_c7Lz249Igbl5buOJvCcRzEY" alt="linkdin" className="icon"/>
          </a>
          <a href="https://github.com/32sunny" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github" className="icon"/>
          </a>
         
        </div>
        
      </div>
     
      <form onSubmit={onSubmit} className="contact-form " >
     
      

  


        <input className="form-input" 
        type="text" 
        placeholder="Enter your name"
        name="name" 
        required/>
        <input className="form-input"
        placeholder="Enter Email"
         type="email" 
         name="email"
          required/>
        <textarea 
        className="form-textarea" 
        placeholder="Enter your messagae"
        name="message" 
        required></textarea>

        <button className="form-button" type="submit">Submit Form</button>

      </form>
      </div>
  
    </>
  );
};

export default ContactForm;
