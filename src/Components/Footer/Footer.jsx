// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h5>About Me</h5>
          <p>I'am Divyesh Borse 
          </p>
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <ul>
            <li>Email:divyeshborse2002@gmail.com</li>
            <li>Phone: 9307461679</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Follow Me</h5>
          <ul className="social-media">
            <li><a href="https://twitter.com" className="fab fa-twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/divyesh-bosre-b702b622b" className="fab fa-linkedin"></a></li>
            <li><a href="https://github.com/divyeshborse2002" className="fab fa-github"></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Divyesh Borse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
