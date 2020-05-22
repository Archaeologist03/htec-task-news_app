import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const ListedNewsPageContainer = styled.div`
  border: 2px solid white;

  .pageTitle {
    color: #fff;
    margin-left: 20px;

    .pageTitleCountry {
      color: ${yellowColor};
    }
  }

  .newsCardsContainer {
    border: 2px solid white;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const NewsCardContainer = styled.article`
  margin: 10px;

  @media (max-width: 968px) {
    width: 45%;
  }

  @media (max-width: 568px) {
    width: 100%;
  }
`;
