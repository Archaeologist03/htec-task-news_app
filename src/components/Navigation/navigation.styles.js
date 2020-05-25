import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  border-radius: 4px;
  font-size: 1.5rem;
  min-height: 8vh;
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  right: 0;

  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
