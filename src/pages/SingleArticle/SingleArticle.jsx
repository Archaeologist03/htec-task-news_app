import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { SingleArticleContainer } from './singleArticle.styles';

const SingleArticle = () => {
  const history = useHistory();
  const articleId = useParams().articleId;
  const topNewsArticles = useSelector((state) => state.news.topNewsArticles);

  let article;

  // Just to dev test and prevent curr error
  if (!topNewsArticles) {
    article = {};
    article.title = 'Some title title title acewcace22e a whatever';
    article.content =
      'Some content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, maxime a! Illo ut sequi explicabo molestias! Iusto sed illo ipsum! a whatever';
    article.urlToImage = 'Some title title title acewcace22e a whatever';
  } else {
    article = topNewsArticles && topNewsArticles[articleId];
  }
  console.log(article);

  return (
    <SingleArticleContainer>
      <h1 className='articleTitle'>{article.title}</h1>
      <aside className='imageContainer'>
        <img src={article.urlToImage} alt='article' />
      </aside>
      <article className='contentContainer'>
        <p>{article.content}</p>
      </article>

      <button className='backToList' onClick={() => history.goBack()}>
        Back to List
      </button>
    </SingleArticleContainer>
  );
};

export default SingleArticle;
