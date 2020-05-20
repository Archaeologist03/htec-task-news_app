import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  display: flex;

  border: 4px solid green;
`;

export const NavigationContainer = styled.div`
  border: 4px solid tomato;

  display: flex;
  justify-self: flex-start;
`;

export const CounterSwitcherContainer = styled.div`
  border: 4px solid yellow;

  display: flex;
  justify-self: flex-end;
`;
