import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

import {
  ListedNewsPageContainer,
  NewsCardContainer,
} from './listedNewsPage.styles';

const ListedNewsPage = ({ pageTitle, newsCardData }) => {
  return (
    <ListedNewsPageContainer>
      <h1 className='pageTitle'>Top News :{pageTitle}</h1>
      <section className='newsCardsContainer'>
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>{' '}
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>{' '}
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>{' '}
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>{' '}
        <NewsCardContainer>
          <NewsCard newsCardData={newsCardData} />
        </NewsCardContainer>
      </section>
    </ListedNewsPageContainer>
  );
};

export default ListedNewsPage;
