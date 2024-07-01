import { useEffect } from 'react';
import axios from 'axios';

const useFetchData = (setData) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
        // Fallback to sample data if API fails
        const sampleData = [
          { category: 'Category 1', value: 150 },
          { category: 'Category 2', value: 200 },
          { category: 'Category 3', value: 250 },
          { category: 'Category 4', value: 100 },
          { category: 'Category 5', value: 300 },
        ];
        setData(sampleData);
      }
    };

    fetchData();
  }, [setData]);
};

export default useFetchData;
