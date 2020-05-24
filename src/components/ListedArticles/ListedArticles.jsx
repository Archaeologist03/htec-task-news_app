import React from 'react';
import PropTypes from 'prop-types';

import ArticleCard from '../ArticleCard/ArticleCard';

import {
  ListedArticlesContainer,
  ArticleCardContainer,
} from './listedArticles.styles.js.js';

const ListedArticles = React.memo(({ pageTitle, articles }) => {
  const articlesCards = articles
    ? articles.map((articleObj, i) => {
        return (
          <ArticleCardContainer key={i}>
            <ArticleCard
              articleId={i}
              title={articleObj.title}
              imageUrl={articleObj.urlToImage}
              description={articleObj.description}
            />
          </ArticleCardContainer>
        );
      })
    : null;

  const title = pageTitle ? pageTitle : null;

  return (
    <ListedArticlesContainer>
      <h1 className='pageTitle'>{title}</h1>
      <section className='articlesCardsContainer'>{articlesCards}</section>
    </ListedArticlesContainer>
  );
});

ListedArticles.propTypes = {
  articles: PropTypes.array,
};

export default ListedArticles;
