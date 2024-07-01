import React, { createContext, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useFetchData(setData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
