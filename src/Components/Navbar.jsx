import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import favicon from "../images/favicon.png";
//import logoold from "../images/logoold.png";
//import tlogo from "../images/tlogo.png";


const Navbar = () => {
  return (
    <nav class="navbar">
       <div className="container">
         <header className="header">
       <div className="logo-section">
      {/*<h4>Modern Logistic Transportation</h4>*/}
          <span className="logo-text">Modern Logistic Transportation</span>
        </div>
        </header>
      
       
        
        
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Aboutus</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contactus">ContactUsPage</Link></li>
        <li><Link to="/blog">BlogPage</Link></li>
        <li><Link to="/customer">Customer</Link></li>
      </ul>
     
     </div>
    </nav>
    
  );
};
export default Navbar;