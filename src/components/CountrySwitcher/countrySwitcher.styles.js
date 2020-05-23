import styled from 'styled-components';

import { whiteText, yellowColor, hoverText } from '../../styles/-variables';

export const CountrySwitcherContainer = styled.div`
  font-size: 20px;

  .btn {
    border: 1px solid ${whiteText};
    display: inline-block;
    padding: 10px;
    position: relative;
    text-align: center;
    transition: background 600ms ease, color 600ms ease;
    color: ${whiteText};
  }

  input[type='radio'].toggle {
    display: none;
    & + label {
      cursor: pointer;
      min-width: 60px;
      transition: border 0.5s ease-in-out;

      &:hover {
        background: none;
        color: ${hoverText};
      }

      &:after {
        background: ${yellowColor};
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
        width: 100%;
        z-index: -1;
      }
    }

    &.toggle-left + label {
      border-right: 0;

      &:after {
        left: 100%;
      }
    }

    &.toggle-right + label {
      &:after {
        left: -100%;
      }
    }
    &:checked + label {
      cursor: default;
      color: #fff;
      transition: color 200ms;

      &:after {
        left: 0;
      }
    }

    &:disabled + label {
      border: 1px solid tomato;
      background-color: rgb(63, 42, 42);
      color: grey;
    }
  }
`;
