import React from 'react';

import ListedNewsPage from '../../components/ListedNewsPage/ListedNewsPage';

import styled from 'styled-components';

export const TopNewsContainer = styled.div`
  position: absolute;
  top: 10%;
  min-height: 90%;

  border: 3px solid green;
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
  return (
    <TopNewsContainer>
      <ListedNewsPage />
    </TopNewsContainer>
  );
};

export default TopNews;
