import React from 'react';

import Navigation from '../Navigation/Navigation';
import CountrySwitcher from '../CountrySwitcher/CountrySwitcher';

import {
  HeaderContainer,
  NavigationContainer,
  CounterSwitcherContainer,
} from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <CounterSwitcherContainer>
        <CountrySwitcher />
      </CounterSwitcherContainer>
    </HeaderContainer>
  );
};

export default Header;
