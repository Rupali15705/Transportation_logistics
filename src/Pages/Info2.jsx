import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const Info2 = () => {
  return (
    <div className="info-container">
      <h1>Understanding Backload, Return Load & Empty Miles Problems</h1>
      <p>
        What is Transportation Costs?
        The term “transportation costs” refers to the whole budget for moving everything from raw materials to completed goods to staff. It’s the cash that pays for getting everything in motion so that clients may anticipate receiving their orders on schedule.
        </p>
        <p>
        It varies widely from company to business as to which one is the most expensive. It will take away the vast bulk of your profits if you run a distribution business. Fewer salespeople on the field may be acceptable for a software firm.

        </p>
     
      <p>
        You Might Also Like To Read: 6 Effective Ways to Reduce Shipping Costs
      </p>
      <Link to="/blog"className="goback"> » Go Back</Link> 

    </div>
  )
}

export default Info2
