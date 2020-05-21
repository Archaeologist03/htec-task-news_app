import React from 'react';

import { StyledLink } from './navItem.styles';

const NavItem = ({ children, linkTo, exact }) => {
  return (
    <StyledLink to={linkTo} exact={exact}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

export default NavItem;
