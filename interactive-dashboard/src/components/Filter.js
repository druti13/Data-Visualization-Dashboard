import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { AiOutlineFilter } from 'react-icons/ai'; // Example: using AiOutlineFilter icon

const Sidebar = () => {
  const { setFilter } = useContext(FilterContext);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <aside className="sidebar">
      <h2>
        <AiOutlineFilter style={{ marginRight: '0.5rem' }} />
        Filters
      </h2>
      <input
        type="text"
        placeholder="Filter data"
        onChange={handleFilterChange}
      />
    </aside>
  );
};

export default Sidebar;
