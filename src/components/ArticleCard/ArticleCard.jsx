import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

import stringShortener from '../../utils/stringShortener';

import { ArticleCardContainer } from './articleCard.styles';

const ArticleCard = ({ title, imageUrl, description, articleId }) => {
  const location = useLocation();
  const params = useParams();
  const shortenDescription = stringShortener(description, 100);
  let pathname = location.pathname;

  // For Top News - if its just / remove it since its already in Link component below.
  if (pathname === '/') {
    pathname = '';
  }

  return (
    <ArticleCardContainer>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardImageContainer'>
        <img src={imageUrl} alt='news article' />
      </div>
      <p className='cardDescription'>{shortenDescription}</p>
      <Link to={`${pathname}/${articleId}`} className='cardMore'>
        More
      </Link>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
