import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTopNewsByTerm } from '../../redux/news/newsActions';
import { countries } from '../../constants/constants';
import ListenArticles from '../../components/ListedArticles/ListedArticles';
import SearchBar from '../../components/SearchBar/SearchBar';

import { SearchContainer, SearchBarContainer } from './search.styles';

const Search = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.news.country);
  const topNewsByTermArticles = useSelector(
    (state) => state.news.topNewsByTermArticles,
  );

  const onInputTermChange = (searchTerm) => {
    dispatch(fetchTopNewsByTerm(country, searchTerm));
  };

  const pageTitle = `Search top news from ${countries[country]} by term:`;

  return (
    <SearchContainer>
      <h1 className='pageTitle'>{pageTitle}</h1>
      <SearchBarContainer>
        <SearchBar onInputTermChange={onInputTermChange} />
      </SearchBarContainer>
      <ListenArticles articles={topNewsByTermArticles} />
    </SearchContainer>
  );
};

export default Search;
