import React, { useState } from "react";
import "../App.css"; // Import the CSS file
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ContactUs = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We will get back to you soon.");
  };

  return (
    <div>
     
    <div className="contact-container">
      <div className="contact-form-horizontal">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="form-horizontal">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    {/* Add Footer at the bottom */}
    </div>
  );
};

export default ContactUs;