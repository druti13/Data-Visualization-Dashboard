import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { FilterContext } from '../context/FilterContext';
import ChartContainer from './ChartContainer';
import ExportButton from './ExportButton';
import DataInputForm from './DataInputForm';

const Dashboard = () => {
  const { data } = useContext(DataContext);
  const { filter } = useContext(FilterContext);

  const filteredData = data.filter((d) =>
    d.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="dashboard">
      <DataInputForm />
      <div className="chart-section">
        <h2 className="chart-title">Sales Data</h2>
        <ChartContainer data={filteredData} />
      </div>
      <ExportButton data={filteredData} />
    </div>
  );
};

export default Dashboard;
