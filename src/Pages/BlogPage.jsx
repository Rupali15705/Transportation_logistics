import React, { Component } from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import blogimg1 from "./../Components/Images/blog_image1.jpg"
import blogimg2 from "./../Components/Images/blog_image2.jpg"
import blogimg3 from "./../Components/Images/blog_image3.jpg"
import blogimg4 from "./../Components/Images/blog_image4.jpg"
import blogimg5 from "./../Components/Images/blog_image5.jpg"
import blogimg6 from "./../Components/Images/blog_image6.jpg"

const  BlogPage= () => {
    const blogs = [
        {
          title: "Climate Change Impact On Transportation: 5 Steps To Reduce Emissions",
          date: "February 11, 2025",
          image: blogimg1,
          link: "/Info" ,
        },
        {
          title: "Understanding Backload, Return Load & Empty Miles Problems",
          date: "February 7, 2025",
          image: blogimg2,
          link: "/Info2",
        },
        {
          title: "Emerging Trends in Long-Haul Road Transportation",
          date: "February 7, 2025",
          image: blogimg3,
          link: "/Info3",
        },
          {
          title: "What is Load Planning in Transportation Management?",
          date: "February 11, 2025",
          image: blogimg4,
          link: "/Info4",
        },
        {
          title: "10 Smart Approaches to Resolving Road Traffic Problems",
          date: "February 7, 2025",
          image: blogimg5,
          link: "/Info5",
        },
        {
          title: "How Green Transportation Helps in Reducing Pollution?",
          date: "February 7, 2025",
          image: blogimg6,
          link: "/Info6",
        },
        
      ];

      const tags = [
        "3PL", "4PL", "AIR TRANSPORTATION", "CLIMATE", "CROSS-DOCKING",
        "CUSTOMER SERVICE", "DATA SCIENCE", "E-COMMERCE", "FREIGHT",
        "FREIGHT FORWARDING", "GST", "INVENTORY", "LOGISTICS DATA",
        "LOGISTIC STRATEGIES", "OMNICHANNEL", "PACKAGING", "RAIL TRANSPORTATION",
        "ROAD SAFETY", "ROAD TRAFFIC", "ROAD TRANSPORT", "SHIPPING",
        "SUSTAINABLE", "TECHNOLOGY", "TRANSPORT SAFETY", "TRUCK", "TRUCK DRIVING",
        "WAREHOUSING", "WATER TRANSPORTATION"
      ];
      return (
        <div className="blog-container">
          <div className="blog-list">
            {blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <img src={blog.image} alt="Blog" />
                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  <p>{blog.date}</p>
                  <Link to={blog.link} className="read-more">Read More »</Link> 
                </div>
              </div>
            ))}
          </div>
          <div className="blog-sidebar">
            <h3>Tags</h3>
            <div className="tag-list">
              {tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default BlogPage;
