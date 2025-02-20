import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Info5 = () => {
    return (
        <div className="info-container">
            <h1>10 Smart Approaches to Resolving Road Traffic Problems</h1>
            <p>
                Smart Approaches to Resolving Road Traffic Problems
                Traffic jams create major problems in cities throughout
                 the world that affect how people live and how cities operate. 
                 The problem slows down travel times and uses more fuel while creating 
                 environmental hazards that harm both the planet and human health. Heavy
                  traffic slows down the delivery of goods and services which reduces business output.

         Populated cities and rising vehicle numbers make the situation worse. Traffic problems need smart solutions that make transportation systems work better while protecting our environment and saving time. Through smart approaches and tech-enabled policies, we can solve transportation difficulties to make our systems more efficient and sustainable. Here are ten smart approaches to resolving road traffic problems:
            </p>

            <Link to="/blog"className="goback"> » Go Back</Link> 

        </div>
    )
}

export default Info5
