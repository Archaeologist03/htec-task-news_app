import React from 'react';
import PropTypes from 'prop-types';

import PaginationCard from './PaginationCard/PaginationCard';
import { PaginationContainer } from './pagination.styles';

const Pagination = ({ articles, category }) => {
  const perPage = 3;
  let counter = 0;
  let startingIndex = 0;
  const toDisplayArticles = articles
    ? articles.filter((article, i) => {
        if (startingIndex <= i && counter < perPage) {
          counter++;
          return article;
        }
        return false;
      })
    : null;

  const categoryArticles = toDisplayArticles
    ? toDisplayArticles.map((articleObj, i) => {
        return (
          <div className='paginationCardContainer' key={i}>
            <PaginationCard
              category={category}
              articleId={i}
              title={articleObj.title}
              imageUrl={articleObj.urlToImage}
              description={articleObj.description}
            />
          </div>
        );
      })
    : null;

  return (
    <PaginationContainer>
      {/* <div className='indicator indicatorLeft'>{'<---'}</div> */}
      {categoryArticles}
      {/* <div className='indicator indicatorRight'>{'--->'}</div> */}
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  articles: PropTypes.array,
  category: PropTypes.string.isRequired,
};

export default Pagination;
