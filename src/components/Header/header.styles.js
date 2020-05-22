import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  border-bottom: 2px solid black;
  box-shadow: 2px 2px 4px black;
  min-height: 10vh;
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
