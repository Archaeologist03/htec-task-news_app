import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import stringShortener from '../../../utils/stringShortener';

import { PaginationCardContainer } from './paginationCard.styles';

const PaginationCard = ({
  title,
  imageUrl,
  description,
  articleId,
  category,
}) => {
  const location = useLocation();
  const shortenDescription = stringShortener(description, 50);
  const shortenTitle = stringShortener(title, 50);

  const pathname = location.pathname;

  return (
    <PaginationCardContainer>
      <h2 className='cardTitle'>{shortenTitle}</h2>
      <div className='cardImageContainer'>
        <img src={imageUrl} alt='news article' />
      </div>
      <p className='cardDescription'>{shortenDescription}</p>
      <Link to={`${pathname}/${category}/${articleId}`} className='cardMore'>
        More
      </Link>
    </PaginationCardContainer>
  );
};

PaginationCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  articleId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default PaginationCard;
