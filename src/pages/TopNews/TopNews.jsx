import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTopNews } from '../../redux/news/newsActions';

import ListedArticles from '../../components/ListedArticles/ListedArticles';

import { countries } from '../../constants/constants';

import { TopNewsContainer } from './topNews.styles';

const TopNews = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.news.country);
  const topNewsArticles = useSelector((state) => state.news.topNewsArticles);
  const error = useSelector((state) => state.news.error);
  console.log(error, 'error in topNews');

  useEffect(() => {
    dispatch(fetchTopNews(country));
  }, [country, dispatch]);

  const pageTitle = `Top news from ${countries[country]}`;

  return (
    <TopNewsContainer>
      <ListedArticles articles={topNewsArticles} pageTitle={pageTitle} />
    </TopNewsContainer>
  );
};

export default TopNews;
