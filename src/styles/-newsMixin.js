import { css } from 'styled-components';

export const pageTitle = css`
  color: #fff;
  font-size: 1.7rem;
  align-self: flex-start;
  margin: 3rem 2rem;
  margin-bottom: 4rem;

  @media (max-width: 560px) {
    font-size: 1.4rem;
  }
`;

export const backAndForthHover = css`
  transform: scale(1.05);
`;
