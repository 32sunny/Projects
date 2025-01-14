import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/sunny-mourya-a5a22a326/" target="_blank">
            <img src="https://media.licdn.com/dms/image/v2/D4D12AQFSkkazpND0Tg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696901179396?e=2147483647&v=beta&t=sg_aDp3g51FrQdFdKqc_c7Lz249Igbl5buOJvCcRzEY" alt="linkdin"/>
          </a>
          <a href="https://github.com/32sunny" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github"/>
          </a>
         
        </div>
        <div className="footer-copy">
        <p>&copy; 2025 Areacyt. Powered by passion and technology. ⚡</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
