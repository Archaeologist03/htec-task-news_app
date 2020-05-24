import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SearchBarInput } from './searchBar.styles';

const SearchBar = ({ onInputTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // Need Country state to fetch new data on country switch as well.
  // useEffect triggers on country change in order to fetch data.
  const country = useSelector((state) => state.news.country);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    onInputTermChange(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm, country]);

  return (
    <SearchBarInput
      type='text'
      placeholder='Search term...'
      value={searchTerm}
      onChange={onInputChange}
    />
  );
};

export default SearchBar;
