import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import stringShortener from '../../utils/stringShortener';

import { ArticleCardContainer } from './articleCard.styles';

const ArticleCard = ({ title, imageUrl, description, articleId }) => {
  const location = useLocation();
  const shortenDescription = stringShortener(description, 100);
  let pathname = location.pathname;

  if (pathname === '/') {
    pathname = '';
  }

  return (
    <ArticleCardContainer>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardImageContainer'>
        <img src={imageUrl} alt='news' />
      </div>
      <p className='cardDescription'>{shortenDescription}</p>
      <Link to={`${pathname}/${articleId}`} className='cardMore'>
        More
      </Link>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
