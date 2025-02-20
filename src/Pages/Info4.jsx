import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Info4 = () => {
  return (
    <div className="info-container">
      <h1>
      What is Load Planning in Transportation Management?
      </h1>
      <p>
      Load planning in transportation management refers to the process of strategically arranging cargo 
      within a vehicle, like a truck or container, to maximize space utilization, minimize transportation 
      costs, ensure safe transportation, and optimize overall logistics efficiency by considering factors
       like weight distribution, cargo compatibility, and delivery sequence across multiple shipments;
        essentially, it's about packing goods in the most effective way possible to fit the maximum amount of 
        cargo while adhering to vehicle capacity and safety regulations. 
      </p>

      <Link to="/blog"className="goback"> » Go Back</Link> 

    </div>
  )
}

export default Info4
