
import React from "react";
import  { useEffect, useState } from 'react'
import "./AboutUs.css";

const About = () => {
  
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])
 
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div id="flex1">
      <section className="about-hero">
        <h1 className="hero-title">About Us</h1>
       
        <p className="hero-subtitle">
        Our e-commerce platform is designed to provide a seamless shopping experience, offering a wide range of products, secure payments, and fast delivery. We prioritize customer satisfaction with a user-friendly interface and round-the-clock support.
        </p>
      </section>
      <img id="img1" src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww" alt="" />
      </div>

      {/* Mission Section */}
      <div id="flex2">
      <img id="img2" src="https://userway.org/blog/wp-content/uploads/2022/01/Reasons-to-make-your-e-commerce-accessible.jpg" alt="" />

      <section className="about-mission">
        
        <h2 className="section-title" id="h2">Our Mission</h2>
        <p className="section-text">
        We aim to revolutionize online shopping by delivering value, convenience, and trust. Our mission is to empower customers with an effortless and enjoyable e-commerce experience, making quality products accessible to everyone.
        </p>
      </section>
      </div>

      {/* Features Section */}
      <section className="about-features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card card1">
            <h3>Vast Product Range</h3>
            <p>Explore a wide selection of high-quality products tailored to your needs</p>
          </div>
          <div className="feature-card card2">
            <h3>Secure Transactions</h3>
            <p> Enjoy safe and reliable payment options for a worry-free shopping experience. </p>
          </div>
          <div className="feature-card card1">
            <h3>Fast Delivery</h3>
            <p>Count on us for prompt shipping and easy returns.</p>
          </div>
          <div className="feature-card card2">
            <h3>Customer Support</h3>
            <p>Our team is always ready to assist you with any queries or concerns.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className="section-title">Happy Coutomer</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://ecommercefastlane.com/wp-content/uploads/2024/03/Asian-woman-holding-blue-happy-smile-face.jpeg"
              alt="Modern Building"
            />
           
          </div>
          <div className="team-card">
            <img
              src="https://media.istockphoto.com/id/1205737011/photo/young-indian-man-wearing-t-shirt-standing-over-isolated-white-background-in-hurry-pointing-to.jpg?s=612x612&w=0&k=20&c=3BfVdlhNllbK8S0jrfBiHWLrWDVRoIMpTzSqkWBDusQ="
              alt="Urban Skyscraper"
            />
           
          </div>
          <div className="team-card">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-t-shirt/b/u/h/15-16-years-gn-free-fire-kids-tee-original-imagqgf83xk2te2m.jpeg?q=90&crop=false"
              alt="Real Estate Innovation"
            />
           
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="about-cta">
      
        <a href="https://en.wikipedia.org/wiki/E-commerce" target="blank" className="cta-button">
          Explore Listings
        </a>
      </section>
    </div>
  );
};

export default About;
