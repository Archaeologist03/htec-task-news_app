import React from 'react';
import { useHistory } from 'react-router-dom';

import { SingleArticleContainer } from './singleArticle.styles';

// UI for SingleArticle page - LOGIC in Containers folder
const SingleArticle = ({ article }) => {
  const history = useHistory();

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
