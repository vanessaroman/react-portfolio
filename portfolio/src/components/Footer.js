import React from 'react';
import '../styles/App.css';

const Footer = () => {
  return (  
    <div className="footer-container">
      <footer>
        <ul>
               <li>  <a href="https://github.com/vanessaroman" className="link-info">GitHub</a> </li>
                
                <li> <a href="https://www.linkedin.com/in/vanessa-r-721224101/" className="link-info">LinkedIn</a> </li>
                
                <li> <a href="mailto:vanessavirginiarr@gmail.com" className="link-info">Email</a>  </li>
        </ul>
      </footer>
    </div>   
  );
};

export default Footer;