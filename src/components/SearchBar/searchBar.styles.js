import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const SearchBarInput = styled.input`
  border: 3px solid transparent;
  padding: 1rem;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.5s ease-in-out;

  &:hover {
    border: 3px solid ${yellowColor};
  }

  &::placeholder {
    padding-left: 0.5rem;
  }
`;
