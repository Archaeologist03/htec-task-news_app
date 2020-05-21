import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countrySwitch } from '../../redux/news/newsActions';

import { CountrySwitcherContainer } from './countrySwitcher.styles';

const CountrySwitcher = () => {
  const dispatch = useDispatch();
  const countrySwitcherDisabled = useSelector(
    (state) => state.news.countrySwitcherDisabled,
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
        disabled={countrySwitcherDisabled}
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
        disabled={countrySwitcherDisabled}
      />
      <label htmlFor='toggle-off' className='btn'>
        US
      </label>
    </CountrySwitcherContainer>
  );
};

export default CountrySwitcher;
