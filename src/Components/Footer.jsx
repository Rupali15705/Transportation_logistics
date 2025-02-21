import React from "react";
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//import facebook from "../images/facebook.png";
//import youtube from "../images/youtube.png";
//import instagram from "../images/instagram.png";
//import twitter from "../images/twitter.png";


const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="container p-4">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3">
              <h6 className="footer-heading">Modern Logistic Transportation</h6>
              <p>
                India is broadly admired for our hasty, prompt,
                dependable, and practical household packing and Moving Services surrounded by our clients.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Aboutus</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contactus">ContactUsPage</Link></li>
                <li><Link to="/blog">BlogPage</Link></li>
                <li><Link to="/">Customer</Link></li>
                <li><Link to="/faq">FAQPage</Link></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-2">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="footer-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Privacy Police</a></li>
                <li><a href="#">Customer</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3">
              <h6 className="footer-heading">Contact</h6>
              <ul className="footer-contact">
                <li><i className="fa fa-home"></i> Solapur,Maharashtra,India</li>
                <li><i className="fa fa-envelope"></i> modernlogistic123@gmail.com</li>
                <li><i className="fa fa-phone"></i> +01 234 567 88</li>
                <li><i className="fa fa-print"></i> +01 234 567 89</li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">

            <div className="footer-social">
              <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
              <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fa fa-google"></i></a>
              <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>


  );
};

export default Footer;