import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countries } from '../../constants/constants';
import Accordion from '../../components/Accordion/Accordion';
import { CategoriesContainer, AccordionContainer } from './categories.styles';

const Categories = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.news.country);

  console.log(country, 232);

  const pageTitle = `Top 5 news by categories from ${country.toUpperCase()}:`;

  return (
    <CategoriesContainer>
      <h1 className='pageTitle'>{pageTitle}</h1>
      <AccordionContainer>
        <Accordion />
      </AccordionContainer>
    </CategoriesContainer>
  );
};

export default Categories;
