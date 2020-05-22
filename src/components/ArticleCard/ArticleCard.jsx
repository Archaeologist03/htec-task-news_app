import React from 'react';

import { ArticleCardContainer } from './articleCard.styles';

const ArticleCard = ({ title, imageUrl, description }) => {
  return (
    <ArticleCardContainer>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardImageContainer'>
        <img src={imageUrl} alt='news' />
      </div>
      <p className='cardDescription'>{description}</p>
      <a href='/sometitle' className='cardMore'>
        More
      </a>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
