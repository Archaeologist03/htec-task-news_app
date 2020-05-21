import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  display: flex;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-self: flex-start;
`;

export const CounterSwitcherContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  overflow: hidden;
`;
