import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const FAQPage = () => {
  const faqs = [
    {
      question: "What is logistics management?",
      answer: "Logistics management involves planning, implementing, and controlling the movement of goods, services, and information from origin to consumption."
    },
    {
      question: "How does AI improve logistics?",
      answer: "AI helps optimize routes, predict demand, automate warehouses, and enhance supply chain efficiency."
    },
    {
      question: "What are eco-friendly logistics practices?",
      answer: "These include using electric vehicles, optimizing routes for fuel efficiency, and adopting sustainable packaging."
    },
    {
      question: "What services does your transportation and logistics company provide?",
      answer: "We offer freight transportation, warehousing, supply chain management, last-mile delivery, and customs clearance for businesses of all sizes."
    },
    {
      question: "Do you provide international shipping?",
      answer: "Yes, we offer both domestic and international shipping via air, sea, and road transportation."
    },

  ];

  // State to handle active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active question
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>

      {/* Header */}
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </header>

      {/* FAQ Section */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="toggle-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>


    </div>
  );
};

export default FAQPage;
