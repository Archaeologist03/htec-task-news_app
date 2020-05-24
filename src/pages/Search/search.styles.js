import styled from 'styled-components';

import { pageTitle } from '../../styles/-newsMixin';

export const SearchContainer = styled.div`
  position: absolute;
  top: 10%;
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pageTitle {
    ${pageTitle}
  }
`;

export const SearchBarContainer = styled.div`
  width: 25%;

  @media (max-width: 1160px) {
    width: 35%;
  }

  @media (max-width: 860px) {
    width: 45%;
  }

  @media (max-width: 560px) {
    width: 65%;
  }
`;
