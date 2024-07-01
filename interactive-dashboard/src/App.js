import React from 'react';
import { DataContextProvider } from './context/DataContext';
import { FilterContextProvider } from './context/FilterContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <DataContextProvider>
      <FilterContextProvider>
        <div className="app">
          <Header />
          <div className="main-content">
            <Sidebar />
            <Dashboard />
          </div>
        </div>
      </FilterContextProvider>
    </DataContextProvider>
  );
}

export default App;
