import React from 'react';

import ArticleCard from '../ArticleCard/ArticleCard';

import styled from 'styled-components';

export const PaginationContainer = styled.section`
  border: 2px solid red;
  width: 100%;
  overflow: hidden;

  .articleCardContainer {
    width: 30%;
    border: 2px solid green;
  }

  .indicator {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .indicator-left {
  }
  .indicator-right {
  }
`;

// #TODO Fetch only 6 or so articles, and then fetch new ones on every 3rd indicator click (counter)

const Pagination = ({ articles }) => {
  const categoryArticles = articles
    ? articles.map((articleObj, i) => {
        return (
          <div className='articleCardContainer' key={i}>
            <ArticleCard
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
      <div className='indicator indicatorLeft'>{'<---'}</div>
      {categoryArticles}
      <div className='indicator indicatorRight'>{'--->'}</div>
    </PaginationContainer>
  );
};

export default Pagination;
