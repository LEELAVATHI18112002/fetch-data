import React, { useState } from 'react';
import './App.css';

function App() {
  // Employee data array
  const employees = [
    { name: 'xxx', place: 'Kelamangalam' },
    { name: 'yyy', place: 'Hosur' },
    { name: 'zzz', place: 'Chennai' },
    { name: 'kkk', place: 'Delhi' },
    { name: 'lll', place: 'Kerala' },
  ];

  // Array of colors for each box
  const boxColors = [
    '#FF5733',  // Red
    '#33FF57',  // Green
    '#3357FF',  // Blue
    '#F3F333',  // Yellow
    '#A833FF',  // Purple
  ];

  // State to store data for the selected employee
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBox, setCurrentBox] = useState(null); // To track which box was clicked

  // Function to fetch employee details when a box is clicked
  const fetchData = (index) => {
    setIsLoading(true);
    setCurrentBox(index); // Track which box was clicked
    try {
      const result = employees[index]; // Get the employee details based on the box clicked
      setData(result); // Set the selected employee data
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Employee Details</h1>

      {/* Create 5 boxes for each employee */}
      <div className="boxes-container">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="data-box"
            style={{ backgroundColor: boxColors[index] }} // Apply the background color dynamically
            onClick={() => fetchData(index)}
          >
            <p>Click to view details for Employee {index + 1}</p>
          </div>
        ))}
      </div>

      {/* Display loading or fetched data */}
      {isLoading && <p>Loading...</p>}

      {data && !isLoading && (
        <div className="data-display">
          <h2>Employee {currentBox + 1} Details:</h2>
          <p>Name: {data.name}</p>
          <p>Place: {data.place}</p>
        </div>
      )}
    </div>
  );
}

export default App;
