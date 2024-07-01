import React from 'react';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai'; // Example: using AiOutlineDownload icon

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    saveAs(blob, 'data.json');
  };

  return (
    <button className="export-button" onClick={handleExport}>
      <AiOutlineDownload style={{ marginRight: '0.5rem' }} /> Export Data
    </button>
  );
};

export default ExportButton;
