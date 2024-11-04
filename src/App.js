import React, { useState } from 'react';
import hogsData from './porkers_data';
import HogList from './components/HogList';
import AddHogForm from './components/AddHogForm';
import './App.css';

const App = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);

  const toggleGreasedFilter = () => {
    setShowGreased(!showGreased);
  };

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

  return (
    <div className="ui container">
      <h1>Hogs App</h1>
      <button onClick={toggleGreasedFilter}>
        {showGreased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>
      <AddHogForm addHog={addHog} />
      <HogList hogs={filteredHogs} />
    </div>
  );
};

export default App;
