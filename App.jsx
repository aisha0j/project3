import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [homeworld, setHomeworld] = useState('');
  const [unitType, setUnitType] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        homeworld,
        unitType,
      });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Error submitting form');
    }
  };


  return (
    <div>
      <h1>Enter Homeworld and Unit Type</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Homeworld:
          <input type="text" value={homeworld} onChange={(e) => setHomeworld(e.target.value)} />
        </label>
        <br />
        <label>
          Unit Type:
          <input type="text" value={unitType} onChange={(e) => setUnitType(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;