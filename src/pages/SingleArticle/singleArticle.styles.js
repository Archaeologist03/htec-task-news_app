import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';
import { backAndForthHover } from '../../styles/-newsMixin';

export const SingleArticleContainer = styled.div`
  position: absolute;
  top: 10%;
  min-height: 85%;
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  align-items: center;

  .articleTitle {
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 0;
    margin: 1rem;
    width: 80%;
    text-align: center;
    border-bottom: 1px solid ${yellowColor};

    @media (max-width: 560px) {
      font-size: 1.3rem;
      margin-top: 100px;
    }
  }

  .imageContainer {
    width: 75%;
    height: 50vh;
    border-radius: 12px;
    position: relative;

    @media (max-width: 768px) {
      height: 30vh;
    }

    @media (max-width: 468px) {
      height: 25vh;
    }

    img {
      border-radius: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
      display: block;
      border: 1px solid ${yellowColor};
    }
  }

  .contentContainer {
    border-top: 1px solid ${yellowColor};
    border-bottom: 1px solid ${yellowColor};
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 1rem;
    width: 90%;

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
    margin-left: 5%;
    color: ${yellowColor};
    align-self: flex-start;
    transition: 0.3s ease-in-out;

    &:hover {
      ${backAndForthHover}
    }
  }
`;
