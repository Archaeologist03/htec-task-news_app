import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const ListedArticlesContainer = styled.div`
  width: 100%;

  .pageTitle {
    color: #fff;
    margin-left: 20px;
    margin: 3rem 2rem;

    .pageTitleCountry {
      color: ${yellowColor};
    }
  }

  .articlesCardsContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const ArticleCardContainer = styled.article`
  margin: 10px;
  width: 30%;

  @media (max-width: 1168px) {
    width: 45%;
  }

  @media (max-width: 860px) {
    width: 100%;
  }
`;
