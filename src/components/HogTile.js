import React, { useState } from 'react';

const HogTile = ({ hog }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h2>{hog.name}</h2>
          <button onClick={toggleDetails}>
            {detailsVisible ? "Hide Details" : "Show Details"}
          </button>
          {detailsVisible && (
            <div>
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p>Highest Medal Achieved: {hog.highestMedal}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HogTile;
