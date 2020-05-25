import React from 'react';

import CATEGORIES_LIST from '../../constants/categories';
import SingleAccord from './SingleAccord/SingleAccord';

import { AccordionContainer } from './accordion.styles';

const Accordion = () => {
  const allAccords = CATEGORIES_LIST.map((category, i) => {
    return <SingleAccord key={i} category={category} />;
  });

  return (
    <AccordionContainer>
      <div className='accordTabsContainer'>{allAccords}</div>
    </AccordionContainer>
  );
};

export default Accordion;
