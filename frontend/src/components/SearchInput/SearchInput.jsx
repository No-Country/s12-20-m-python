import { useState } from 'react';
import styles from './SearchInput.module.css';
import { ImSearch } from 'react-icons/im';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type='text'
        placeholder='Buscar'
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className={styles.searchbutton} onClick={handleSearch}>
        <ImSearch style={{ width: '24px', height: '24px' }}/>
      </button>
    </div>
  );
};

export default SearchInput;
