import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import stringShortener from '../../utils/stringShortener';

import { ArticleCardContainer } from './articleCard.styles';

const ArticleCard = ({ title, imageUrl, description, articleId }) => {
  const location = useLocation();
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

ArticleCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  articleId: PropTypes.number.isRequired,
};

export default ArticleCard;
