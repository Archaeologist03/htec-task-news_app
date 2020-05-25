import styled from 'styled-components';

import { yellowColor } from '../../../styles/-variables';

export const SingleAccordContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;
  padding: 1rem 0rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  .category-link {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-left: 1rem;
    color: ${yellowColor};
    z-index: 3;
  }

  .content {
    display: none;
  }

  .open {
    display: block;
  }
`;
