import React from 'react';
import './Footer.css';

const FooterSection: React.FC = () => {
  return (
    <section className="footer">
      <div className="foot">
        <div className="footer-content">
          <div className="footlinks">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="./register.html">Register</a></li>
              <li><a href="./about.html">About Us</a></li>
              <li><a href="./contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div className="footlinks">
            <h4>Connect</h4>
            <div className="social">
              <a href="https://www.facebook.com/mohd.rahil.blogger" target="_blank"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/mohdrahil101" target="_blank"><i className='bx bxl-instagram'></i></a>
              <a href="https://www.twitter.com/mohdrahil101" target="_blank"><i className='bx bxl-twitter'></i></a>
              <a href="https://www.linkedin.com/in/mohdrahil101" target="_blank"><i className='bx bxl-linkedin'></i></a>
              <a href="https://www.youtube.com/techdollarz" target="_blank"><i className='bx bxl-youtube'></i></a>
              <a href="https://www.mohdrahil.wordpress.com" target="_blank"><i className='bx bxl-wordpress'></i></a>
              <a href="https://www.github.com/mohdrahil101" target="_blank"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <p>Copyright © 2023 Dayout Holidays.<br />Website developed by: Nimisha Joshy</p>
      </div>
    </section>
  );
};

export default FooterSection;
