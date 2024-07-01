import React from 'react';
import { BsBarChart } from 'react-icons/bs'; // Example: using BsBarChart icon

const Header = () => {
  return (
    <header className="header">
      <h1>
        <BsBarChart style={{ marginRight: '0.5rem' }} />
        Interactive Data Visualization Dashboard
      </h1>
    </header>
  );
};

export default Header;
