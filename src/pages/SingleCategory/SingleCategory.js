import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// STYLES & COMPONENTS
import { SingleCategoryContainer } from './singleCategory.styles';
import ListedArticles from '../../components/ListedArticles/ListedArticles';

// REDUX & CONSTANTS
import { countries } from '../../constants/constants';
import { fetchTopNewsByCategory } from '../../redux/news/newsActions';

const SingleCategory = () => {
  const dispatch = useDispatch();

  // ROUTER - Getting category name from path(params)
  const category = useParams().category;

  const country = useSelector((state) => state.news.country);
  // Use chosen category from params to access specific category in redux store.
  const categoryArticles = useSelector(
    (state) => state.news.topNewsByCategories[category],
  );

  useEffect(() => {
    console.log(country, category, 222);

    dispatch(fetchTopNewsByCategory(country, category));
  }, [country, category, dispatch]);

  const pageTitle = `Top ${category} news from ${countries[country]}:`;

  return (
    <SingleCategoryContainer>
      <ListedArticles pageTitle={pageTitle} articles={categoryArticles} />
    </SingleCategoryContainer>
  );
};

export default SingleCategory;
