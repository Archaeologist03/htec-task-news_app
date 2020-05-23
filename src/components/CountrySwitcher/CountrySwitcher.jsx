import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countrySwitch } from '../../redux/news/newsActions';

import { CountrySwitcherContainer } from './countrySwitcher.styles';

const CountrySwitcher = () => {
  const dispatch = useDispatch();
  // true if enabled
  const countrySwitcherState = useSelector(
    (state) => state.news.countrySwitcherState,
  );

  const handleInputClick = (countryToSwitch) => {
    dispatch(countrySwitch(countryToSwitch));
  };

  return (
    <CountrySwitcherContainer>
      <input
        id='toggle-on'
        className='toggle toggle-left'
        name='toggle'
        value='false'
        type='radio'
        onClick={() => handleInputClick('gb')}
        defaultChecked
        disabled={!countrySwitcherState}
      />
      <label htmlFor='toggle-on' className='btn'>
        GB
      </label>
      <input
        id='toggle-off'
        className='toggle toggle-right'
        name='toggle'
        value='true'
        type='radio'
        onClick={() => handleInputClick('us')}
        disabled={!countrySwitcherState}
      />
      <label htmlFor='toggle-off' className='btn'>
        US
      </label>
    </CountrySwitcherContainer>
  );
};

export default CountrySwitcher;
