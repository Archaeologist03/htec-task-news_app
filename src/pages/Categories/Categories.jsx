import React from 'react';
import { useSelector } from 'react-redux';

import Accordion from '../../components/Accordion/Accordion';
import { CategoriesContainer, AccordionContainer } from './categories.styles';

const Categories = () => {
  const country = useSelector((state) => state.news.country);

  const pageTitle = `Top 3 news by categories from ${country.toUpperCase()}:`;

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
