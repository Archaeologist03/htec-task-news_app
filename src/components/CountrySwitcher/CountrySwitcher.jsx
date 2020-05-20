import React from 'react';

import { CountrySwitcherContainer } from './countrySwitcher.styles';

const CountrySwitcher = () => {
  // Switch styles => background color of btn based on state/redux store

  return (
    <CountrySwitcherContainer>
      <button className='country-one'>GB</button>
      <button className='country-two'>US</button>
    </CountrySwitcherContainer>
  );
};

export default CountrySwitcher;
