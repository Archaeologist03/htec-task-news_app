import React from 'react';
import styled from 'styled-components';

const NewsCardContainer = styled.article`
  border: 2px solid plum;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  .cardTitle {
    font-size: 1.7rem;
    color: white;
    margin-left: 2rem;
  }
  .cardImageContainer {
    border: 2px solid red;
    overflow: hidden;
    width: 80%;
    margin-left: 2rem;

    img {
    }
  }
  .cardDescription {
    font-size: 1.5rem;
    color: white;
    margin-left: 2rem;
    width: 80%;
    border: 1px solid wheat;
  }

  /* link.. */
  .cardMore {
    font-size: 1.5rem;
    color: white;
    margin-right: 2rem;
    align-self: flex-end;
  }
`;

const NewsCard = ({ newsCardData }) => {
  return (
    <NewsCardContainer>
      <h2 className='cardTitle'>title</h2>
      <div className='cardImageContainer'>
        <img src='' alt='news' />
      </div>
      <p className='cardDescription'>stuff stuff desc</p>
      <a href='/sometitle' className='cardMore'>
        More
      </a>
    </NewsCardContainer>
  );
};

export default NewsCard;
