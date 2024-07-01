import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register all necessary components of Chart.js
Chart.register(...registerables);

const ChartContainer = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.category),
    datasets: [
      {
        label: 'Data Values',
        data: data.map(d => d.value),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#000',
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Categories',
          color: '#000',
        },
        ticks: {
          color: '#000',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Values',
          color: '#000',
        },
        ticks: {
          color: '#000',
        },
      },
    },
  };

  return (
    <div role="img" aria-label="Bar chart showing category-wise data">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartContainer;
