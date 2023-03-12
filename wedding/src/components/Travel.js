import React from 'react';
import './Travel.css';

function Travel() {
  return (
    <div>
      <div className="card travel">
        <h2>Getting there</h2>
        <div className="travel-section">
          <b>Flight</b>
          <p className="travel-pad">
            Closest airport is Reno. From there, you can rent a car or take the <u>South Tahoe Airporter</u> shuttle.
          </p>
          <b>To Edgewood</b>
          <p>
            When arriving at Edgewood, follow signs for The Clubhouse. Ceremony will begin on the North Lawn at 4:30 PM.
          </p>
          <p className="travel-pad">Drive or rideshare recommended. Complimentary valet parking is provided.</p>
        </div>
        <h2>Where to stay</h2>
      </div>
    </div>
  );
}

export default Travel;
