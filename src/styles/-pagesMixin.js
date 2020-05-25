import { css } from 'styled-components';

export const pageContainer = css`
  position: absolute;
  top: 10%;
  min-height: 90%;
  width: 100%;

  @media (max-width: 640px) {
    top: 30%;
  }
`;
