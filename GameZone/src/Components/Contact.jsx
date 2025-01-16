import React from 'react'
import { useState } from 'react'; 

import './Contact.css'
import { useEffect } from 'react'
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
        name: "",
        email: "",
        message: "",
    })
        
    
    // You can call an API here to send the form data
  };
  


  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])

function HAndleinput(){

}

  return (
    <>
      <section className="abouthero ">
        <div className="content center">
          <h2>#Let us talk</h2>
          <p>Leave a message. We love to hear from you</p>
        </div>

      </section>
      <section className='contact'>
        <div className="info">
          <p>Get in touch</p>
          <h2>Visit on our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>56 Glassford street Glasgow G1 1UL Newyork</li>
            <li>contact@example.com</li>
            <li>123456789</li>
            <li>Monday to Saturday 9:00 to 16:00</li>
          </ul>
        </div>
        <div className="map">
          <img src="https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=" alt="" className="imgMy" />
        </div>
      </section>
      <section className='contact cform'>
        <div className="info">
          <p>leave a message</p>
          <h3>We love to hear from you</h3>
          <input
         
          type="text"
          name="name"
          placeholder="Your Name"
        className='cinput'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
         className='cinput'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className='cinput'
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
          <button onClick={handleSubmit} className='shopbtn'>Submit</button>
        </div>
        <div className="map people">
          <div className='p1'>
            <img src={p1} alt="" />
            <div>
              <h3>John Doe</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>
          <div className='p1'>
            <img src={p2} alt="" />
            <div>
              <h3>William Smith</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>
          <div className='p1'>
            <img src={p3} alt="" />
            <div>
              <h3>Emma stone</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Contact