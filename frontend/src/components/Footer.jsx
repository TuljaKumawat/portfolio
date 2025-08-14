import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Footer = () => {
  return (
    <footer className="footer-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-center text-md-start mb-2 mb-md-0">
          <h5 className="fw-bold text-primary">Portfolio</h5>
          <p className="mb-0">&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <a href="https://github.com/TuljaKumawat" className="text-light fs-5"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tulja-kumawat-634605257" target="_blank" rel="noopener noreferrer" className="text-light fs-5"><FaLinkedin /></a>
          <a href="https://t.me/TuljaKumawat" className="text-light fs-5"><FaTelegram /></a>
          <a href="https://tuljakumawat@gmail.com" className="text-light fs-5"><SiGmail /></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
