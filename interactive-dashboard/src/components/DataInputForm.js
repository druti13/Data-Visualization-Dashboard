import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { AiOutlinePlus } from 'react-icons/ai'; // Example: using AiOutlinePlus icon

const DataInputForm = () => {
  const { data, setData } = useContext(DataContext);
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');

  const handleAddData = () => {
    const newData = { category, value: parseFloat(value) };
    setData([...data, newData]);
    setCategory('');
    setValue('');
  };

  return (
    <div className="data-input-form">
      <h2>ADD DATA </h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddData}>
        <AiOutlinePlus style={{ marginRight: '0.5rem',border:'rounded' }} />
        Add The Values
      </button>
    </div>
  );
};

export default DataInputForm;
