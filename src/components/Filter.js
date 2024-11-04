import React from 'react';

const Filter = ({ hogs, onFilter, onSort }) => {
  const handleFilter = (isGreased) => {
    const updatedHogs = isGreased 
      ? hogs.filter(hog => hog.greased) 
      : hogs;
    onFilter(updatedHogs);
  };

  const handleSort = (criteria) => {
    const sortedHogs = [...hogs].sort((a, b) => {
      if (criteria === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });
    onFilter(sortedHogs);
  };

  return (
    <div>
      <button onClick={() => handleFilter(true)}>Show Greased</button>
      <button onClick={() => handleFilter(false)}>Show All</button>
      <button onClick={() => handleSort('name')}>Sort by Name</button>
      <button onClick={() => handleSort('weight')}>Sort by Weight</button>
    </div>
  );
};

export default Filter;
