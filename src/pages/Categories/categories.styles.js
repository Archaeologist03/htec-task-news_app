import styled from 'styled-components';

import { pageContainer } from '../../styles/-pagesMixin';
import { pageTitle } from '../../styles/-newsMixin';

export const CategoriesContainer = styled.div`
  ${pageContainer}
  display: flex;
  flex-direction: column;
  align-items: center;

  .pageTitle {
    ${pageTitle}
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const AccordionContainer = styled.section`
  display: flex;
  width: 94%;
`;
