import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


const Info = () => {
    return (
        <div className="info-container">
            <h1>Climate Change Impact On Transportation</h1>
            <p>
                Climate Change And Global Warming :The subject of climate change is universally recognized as one of paramount importance.
                However, the severity of the problem posed by climate change is still up for question; estimates of the damages that will be
                caused by climate change in the future vary greatly, as do present-day assessments of the costs of adaptation and mitigation...
            </p>
            <hr />
            <p>
                Research from the IPCC predicts that in order to avoid the worst consequences of climate change, the world has to cut
                global greenhouse gas emissions by around 45% by roughly 2030 and reach net-zero emissions by 2050...
            </p>
            <Link to="/blog"className="goback"> » Go Back</Link> 

        </div>
    );
};

export default Info;
