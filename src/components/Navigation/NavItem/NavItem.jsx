import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './navItem.styles';

const NavItem = ({ children, linkTo, exact }) => {
  return (
    <StyledLink to={linkTo} exact={exact}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default NavItem;
