import React, { useState } from 'react';
import axios from 'axios';

const AddCountry = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://restcountries.com/v3.1/name', {
        name: { common: name },
        capital,
        population,
      });
      onAdd(response.data); // Gửi dữ liệu của quốc gia mới tạo đến component cha
      setName('');
      setCapital('');
      setPopulation('');
      window.alert('Country added successfully!');
    } catch (error) {
      window.alert('Country added failed!');
      console.error('Error adding country:', error);
    }
  };

  return (
    <div>
      <h2>Add New Country</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} />
        <input type="number" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCountry;
