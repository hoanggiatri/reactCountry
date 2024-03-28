// CountryManagement.js
import React from 'react';
import CountryList from './ApiData';
import AddCountry from './CreateData';

const CountryManagement = () => {
  const handleAdd = (newCountry) => {
    // Logic để thêm quốc gia mới vào danh sách quốc gia hiện tại
  };

  const handleUpdate = (updatedCapital, updatedPopulation) => {
    // Logic để cập nhật thông tin quốc gia trong danh sách quốc gia hiện tại
  };

  return (
    <div>
      <h1>Country Management</h1>
      <AddCountry onAdd={handleAdd} />
      <CountryList onUpdate={handleUpdate} />
    </div>
  );
};

export default CountryManagement;
