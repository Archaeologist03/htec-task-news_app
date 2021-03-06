import styled from 'styled-components';

import { yellowColor } from '../../../styles/-variables';
import { backAndForthHover } from '../../../styles/-newsMixin';

export const PaginationCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 2px 2px 2px black;
  margin: 0.5rem;
  transition: ease-in-out 0.5s;
  max-height: 95%;

  &:hover {
    box-shadow: 8px 8px 18px black;
  }

  &:hover .cardImageContainer img {
    box-shadow: 4px 4px 12px black;
  }

  .cardTitle {
    font-size: 1.1rem;
    color: white;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid ${yellowColor};
    padding: 0.5rem;
    padding-bottom: 1rem;

    @media (max-width: 560px) {
      font-size: 1rem;
      padding: 0;
    }
  }

  .cardImageContainer {
    overflow: hidden;
    width: 100%;
    height: 30vh;
    position: relative;
    border-radius: 12px;

    @media (max-width: 1560px) {
      height: 12vh;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
      display: block;
      transition: box-shadow ease-in-out 1s;
    }
  }
  .cardDescription {
    font-size: 1.2rem;
    text-align: center;
    color: white;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    border-top: 1px solid ${yellowColor};
    border-bottom: 1px solid ${yellowColor};

    @media (max-width: 960px) {
      display: none;
    }
  }

  /* link.. */
  .cardMore {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
    align-self: flex-end;
    color: ${yellowColor};
    z-index: 3;
    transition: 0.3s ease-in-out;

    &:hover {
      ${backAndForthHover}
    }
  }
`;
