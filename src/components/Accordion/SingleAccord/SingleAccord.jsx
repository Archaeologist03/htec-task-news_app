import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchTopNewsByCategory } from '../../../redux/news/newsActions';
import capitalizeFirstChar from '../../../utils/capitalizeFirstChar';
import Pagination from '../../Pagination/Pagination';
import { SingleAccordContainer } from './singleAccord.styles';

const SingleAccord = ({ category }) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.news.country);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let pathname = location.pathname;

  const categoryArticles = useSelector(
    (state) => state.news.topNewsByCategories[category],
  );

  const onContainerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchTopNewsByCategory(country, category));
    }
  }, [isOpen, country, category, dispatch]);

  // False - accord is closed, and we fetch data on open. Otherwise no need for fething data (on accord close)

  const articles = categoryArticles ? categoryArticles : null;

  console.log(articles);

  return (
    <SingleAccordContainer onClick={onContainerClick}>
      <Link to={`${pathname}/${category}`} className='category-link'>
        {capitalizeFirstChar(category)}
      </Link>
      <div className={`content ${isOpen ? 'open' : null}`}>
        <Pagination articles={articles} category={category} />
      </div>
    </SingleAccordContainer>
  );
};

export default SingleAccord;
