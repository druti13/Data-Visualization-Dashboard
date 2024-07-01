import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { AiOutlineFilter } from 'react-icons/ai'; // Importing filter icon from react-icons

const Sidebar = () => {
  const { setFilter } = useContext(FilterContext);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <div className="filter-wrapper">
        <AiOutlineFilter className="filter-icon" />
        <input
          type="text"
          placeholder="Filter data"
          onChange={handleFilterChange}
        />
      </div>
      
      

      <div className="sidebar-info">
        <h3>Information</h3>
        <p>Welcome to our dashboard! Use the filter above to search for specific data.</p>
        <p>Explore the sidebar items for quick access to important sections.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
