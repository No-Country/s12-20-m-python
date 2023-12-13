import React, { useState } from 'react';
import './SearchInput.module.css';
import { ImSearch } from "react-icons/im";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}><ImSearch /></button>
    </div>
  );
};

export default SearchInput;
