// UpdateCountry.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateCountry = ({ countryId, onUpdate }) => {
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://restcountries.com/v3.1/name/${countryId}`, {
        capital,
        population,
      });
      onUpdate(capital, population); // Gửi thông tin đã cập nhật đến component cha
      setCapital('');
      setPopulation('');
      window.alert('Country updated successfully!');
    } catch (error) {
      window.alert('Country updated failed!');
      console.error('Error updating country:', error);
    }
  };

  return (
    <div>
      <h2>Update Country Information</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} />
        <input type="number" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCountry;
