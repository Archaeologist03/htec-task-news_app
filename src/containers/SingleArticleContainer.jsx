import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useLocation } from 'react-router-dom';

// REDUX & PAGES
import { countrySwitcherState } from '../redux/news/newsActions';
import SingleArticle from '../pages/SingleArticle/SingleArticle';
import {
  selectTopNews,
  selectTopNewsByTerm,
} from '../redux/news/newsSelectors';

// SERVICES IMPORTS
import {
  SingleArticleOutterPathname,
  FindArticleById,
} from '../services/SingleArticleService';

// LOGIC For SingleArticle page - UI is in PAGES folder.
const SingleArticleContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // ROUTER
  const articleId = useParams().articleId;
  const category = useParams().category;

  // STATE
  // Top News
  const topNewsArticles = useSelector(selectTopNews);
  // Top News By Category
  const topNewsByCategoryArticles = useSelector(
    (state) => state.news.topNewsByCategories[category],
  );
  // Top News By Term
  const topNewsByTermArticles = useSelector(selectTopNewsByTerm);

  // EFFECTS
  // Country Switcher is disabled on this page. And goes back to true(enabled) when component is unmounted / exited (cleanup).
  useEffect(() => {
    dispatch(countrySwitcherState(false));
    return () => {
      dispatch(countrySwitcherState(true));
    };
  }, [dispatch]);

  // Determine if there are arrticles - if not - Redirect back to previous page
  let article;

  // REDIRECTING if ARTICLES are MISSING - Otherwise GETTING ARTICLE by ID from path
  let redirectPath;
  // Top News by SEARCH TERM
  if (location.pathname.includes('search')) {
    redirectPath = SingleArticleOutterPathname(
      location.pathname,
      articleId,
      topNewsByTermArticles,
    );
    article = FindArticleById(topNewsByTermArticles, articleId);
  }
  // News by CATEGORY #################### TODO
  else if (location.pathname.includes('categories')) {
    redirectPath = SingleArticleOutterPathname(
      location.pathname,
      articleId,
      topNewsByCategoryArticles,
    );

    article = FindArticleById(topNewsByCategoryArticles, articleId);
  }
  // TOP NEWS
  else {
    redirectPath = SingleArticleOutterPathname(
      location.pathname,
      articleId,
      topNewsArticles,
    );
    article = FindArticleById(topNewsArticles, articleId);
  }

  // If there is redirectPath string - then artices are missing and we redirect back to previous page.
  if (redirectPath) {
    return <Redirect to={redirectPath} />;
  }

  return <SingleArticle article={article} />;
};

export default SingleArticleContainer;
