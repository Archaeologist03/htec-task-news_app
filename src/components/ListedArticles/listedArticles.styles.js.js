import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';
import { pageTitle } from '../../styles/-newsMixin';

export const ListedArticlesContainer = styled.div`
  width: 100%;

  .pageTitle {
    ${pageTitle}

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
