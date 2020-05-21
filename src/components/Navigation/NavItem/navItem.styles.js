import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { whiteText, hoverText } from '../../../styles/-variables';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  min-height: 8vh;
  border: 2px solid transparent;
  border-radius: 24px;
  min-width: 5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${whiteText};
  transition: border 0.4s, color 0.4s;
  margin: 0 1px;

  &.${activeClassName} {
    border-bottom: 2px solid rgba(105, 20, 27, 0.02);
    border-radius: 24px;
    box-shadow: 2px 2px 4px rgba(0, 0, 9, 0.1);
    color: rgb(211, 169, 33);
  }

  &:hover {
    color: ${hoverText};
  }
`;
