import React from 'react';

import { Link } from 'react-router-dom';

import { ArticleCardContainer } from './articleCard.styles';

const ArticleCard = ({ title, imageUrl, description, articleId }) => {
  return (
    <ArticleCardContainer>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardImageContainer'>
        <img src={imageUrl} alt='news' />
      </div>
      <p className='cardDescription'>{description}</p>
      <Link to={`/${articleId}`} className='cardMore'>
        More
      </Link>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
