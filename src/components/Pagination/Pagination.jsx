import React from 'react';

// import ArticleCard from '../ArticleCard/ArticleCard';
import PaginationCard from './PaginationCard/PaginationCard';

import styled from 'styled-components';

export const PaginationContainer = styled.section`
  width: 100%;
  overflow: hidden;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1260px) {
    height: 50vh;
  }

  .paginationCardContainer {
    width: 30%;
    overflow: hidden;

    @media (max-width: 1160px) {
      width: 50%;
    }
  }

  .indicator {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

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

export default Pagination;
