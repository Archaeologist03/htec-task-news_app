import styled from 'styled-components';

import { headerTextSize } from '../../styles/-variables';

export const CountrySwitcherContainer = styled.div`
  display: flex;

  button {
    font-size: ${headerTextSize};
    width: 5rem;
  }

  .country-one {
    border: 1px solid blue;
  }

  .country-two {
    border: 1px solid burlywood;
  }
`;
