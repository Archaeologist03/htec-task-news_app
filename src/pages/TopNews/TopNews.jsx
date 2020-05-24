import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTopNews } from '../../redux/news/newsActions';
import { countries } from '../../constants/constants';
import ListedArticles from '../../components/ListedArticles/ListedArticles';

import { TopNewsContainer } from './topNews.styles';

const TopNews = React.memo(() => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.news.country);
  const topNewsArticles = useSelector((state) => state.news.topNewsArticles);

  useEffect(() => {
    dispatch(fetchTopNews(country));
  }, [country, dispatch]);

  const pageTitle = `Top news from ${countries[country]}:`;

  return (
    <TopNewsContainer>
      <ListedArticles articles={topNewsArticles} pageTitle={pageTitle} />
    </TopNewsContainer>
  );
});

export default TopNews;
