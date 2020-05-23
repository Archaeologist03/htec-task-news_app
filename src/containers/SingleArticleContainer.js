import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useLocation } from 'react-router-dom';

import { countrySwitcherState } from '../redux/news/newsActions';
import SingleArticle from '../pages/SingleArticle/SingleArticle';

// UI in PAGES folder
const SingleArticleContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // ROUTER
  const articleId = useParams().articleId;

  // STATE
  const topNewsArticles = useSelector((state) => state.news.topNewsArticles);

  // EFFECTS
  useEffect(() => {
    dispatch(countrySwitcherState(false));
    return () => {
      dispatch(countrySwitcherState(true));
    };
  }, [dispatch]);

  // Determine if there are arrticles and if not Redirect back to previous page
  let article;
  if (!topNewsArticles) {
    const pathname = location.pathname;
    const outterPathname = pathname.replace(`/${articleId}`, '');

    return <Redirect to={outterPathname} />;
  } else {
    article = topNewsArticles && topNewsArticles[articleId];
  }

  return <SingleArticle article={article} />;
};

export default SingleArticleContainer;
