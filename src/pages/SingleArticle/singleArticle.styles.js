import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const SingleArticleContainer = styled.div`
  border: 2px solid yellow;
  position: absolute;
  top: 10%;
  min-height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  align-items: center;

  .articleTitle {
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 0;
  }

  .imageContainer {
    width: 50%;
    height: 200px;
    overflow: hidden;
    border: 2px solid red;

    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }
  }

  .contentContainer {
    border: 2px solid wheat;

    p {
      color: #fff;
      font-size: 1.2rem;
    }
  }

  .backToList {
    margin-left: 2rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${yellowColor};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    color: ${yellowColor};
    align-self: flex-start;
  }
`;
