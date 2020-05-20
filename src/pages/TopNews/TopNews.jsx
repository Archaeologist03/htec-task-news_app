import React from 'react';

import styled from 'styled-components';

export const TopNewsContainer = styled.section`
  border: 2px solid red;
  min-height: 100vh;
`;

export const TopNewsTitle = styled.div`
  color: white;

  .country {
    font-size: 2rem;
    color: tomato;
  }
`;

export const NewsCardContainer = styled.div``;

const TopNews = () => {
  return <div>Top News Page</div>;
};

export default TopNews;
