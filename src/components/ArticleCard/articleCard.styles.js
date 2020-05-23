import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const ArticleCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 2px 2px 2px black;
  margin: 0.5rem;
  transition: ease-in-out 0.5s;

  &:hover {
    box-shadow: 8px 8px 18px black;
  }

  .cardTitle {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid ${yellowColor};
    padding: 0.5rem;
    padding-bottom: 1rem;
  }
  .cardImageContainer {
    overflow: hidden;
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
      display: block;
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
  }

  /* link.. */
  .cardMore {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
    align-self: flex-end;
    color: ${yellowColor};
  }
`;
