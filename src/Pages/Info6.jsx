import React from 'react'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Info6 = () => {
  return (
    <div className="info-container">
      <h1>
        How Green Transportation Helps in Reducing Pollution?
      </h1>
      <p>


        Green transportation helps reduce pollution by utilizing alternative, environmentally friendly modes of travel like electric vehicles, public transit, cycling, and walking, which significantly decrease the emission of harmful pollutants like carbon dioxide and other greenhouse gases produced by traditional fossil fuel-powered vehicles, thereby improving air quality and mitigating climate change.
        Key points about how green transportation reduces pollution:
        </p>
        <p>
        Lower emissions:
        Electric vehicles, for example, produce zero tailpipe emissions when powered by renewable energy sources, drastically reducing air pollution.
        </p>
        <p>
        Reduced reliance on fossil fuels:
        By shifting to alternative fuels or public transit, the dependence on gasoline and diesel, which are major contributors to air pollution, is lowered.
        </p>
        <p>
        Increased fuel efficiency:
        Green transportation often incorporates design features that maximize fuel efficiency, like low rolling resistance tires and improved aerodynamics, further minimizing emissions.
        </p>
        <p>
        Congestion mitigation:
        Promoting public transportation and cycling can help alleviate traffic congestion, which also leads to decreased emissions.
        </p>
        <p>
        Improved urban air quality:
        By lowering the number of vehicles on the road, green transportation can significantly contribute to cleaner air in cities.
        </p>
        <p>
        Examples of green transportation options:
        </p>
        <p>
        Electric vehicles (EVs): Cars, buses, and motorcycles powered by electricity
        Hybrid vehicles: Vehicles that use both gasoline and electric power
        Public transportation: Buses, trains, and trams
        Cycling: Bicycles for personal transportation
        Walking: Pedestrian commuting
        Bike-sharing programs: Public access to bicycles
      </p>

      <Link to="/blog"className="goback"> » Go Back</Link> 

    </div>
  )
}

export default Info6
