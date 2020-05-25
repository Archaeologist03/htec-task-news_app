import styled from 'styled-components';

export const PaginationContainer = styled.section`
  width: 100%;
  overflow: hidden;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1260px) {
    height: 50vh;
  }

  .paginationCardContainer {
    width: 30%;
    overflow: hidden;

    @media (max-width: 1160px) {
      width: 50%;
    }
  }

  .indicator {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
