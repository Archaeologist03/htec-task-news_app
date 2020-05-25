import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import capitalizeFirstChar from '../../../utils/capitalizeFirstChar';
import Pagination from '../../Pagination/Pagination';

const SingleAccord = ({ category, paginationData }) => {
  const location = useLocation();
  let pathname = location.pathname;
  console.log('category span clicked');
  console.log(pathname, '121');

  return (
    <div className='acord'>
      <label htmlFor='tb-one' className='bg bg-one'>
        <i className='fa fa-comments'></i>
        <Link to={`${pathname}/${category}`} className='category-link'>
          {capitalizeFirstChar(category)}
        </Link>
      </label>
      <input type='checkbox' name='mytabs' id='tb-one' />
      <i className='fa fa-chevron-circle-down'></i>
      <div className='content'>
        <span className='square'></span>
        <Pagination paginationData={paginationData} />
      </div>
    </div>
  );
};

export default SingleAccord;
