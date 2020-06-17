import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDebounce } from '../../hooks/useDebounce';
import { SearchBarInput } from './searchBar.styles';

const SearchBar = ({ onDebounceChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Send debounced value to dispaching compponent.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      onDebounceChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onDebounceChange]);

  return (
    <SearchBarInput
      type='text'
      placeholder='Search term...'
      value={searchTerm}
      onChange={onInputChange}
    />
  );
};

SearchBar.propTypes = {
  onDebounceChange: PropTypes.func,
};

export default SearchBar;
