import React from 'react';

const HogDetails = ({ hog }) => {
  if (!hog) return null;

  return (
    <div>
      <h2>{hog.name}</h2>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
      <p>Highest Medal Achieved: {hog.highestMedal}</p>
    </div>
  );
};

export default HogDetails;
