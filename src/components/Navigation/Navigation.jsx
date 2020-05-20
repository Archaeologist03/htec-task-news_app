import React from 'react';

import NavItem from './NavItem/NavItem';

import { NavigationContainer } from './navigation.styles';

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavItem exact={true} linkTo='/'>
        Top News
      </NavItem>
      <NavItem linkTo='/categories'>Categories</NavItem>
      <NavItem linkTo='/search'>Search</NavItem>
    </NavigationContainer>
  );
};

export default Navigation;
