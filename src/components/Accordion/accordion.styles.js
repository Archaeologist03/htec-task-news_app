import styled from 'styled-components';

import { yellowColor } from '../../styles/-variables';

export const AccordionContainer = styled.div`
  border: 2px solid red;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  .bg {
    background-color: rgb(59, 53, 37);
  }

  .bg-one,
  .bg-one ~ .content span {
    background-color: rgb(59, 53, 37);
  }

  .category-link {
    color: ${yellowColor};
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-left: 0.5rem;
    color: ${yellowColor};
  }

  /* .bg-one,
  .bg-one ~ .content span {
    background-color: rgb(122, 117, 103);
  } */

  /* .bg-two,
  .bg-two ~ .content span {
    background-color: #9b19b6;
  } */

  .tabs-box {
    border: 2px solid red;
    background-color: transparent;
    color: #fff;
    width: 90%;
    margin: 40px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    overflow: hidden;
  }

  .tabs-box .acord {
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid black;
  }
  .tabs-box .acord label {
    position: relative;
    z-index: 2;
    display: block;
    padding: 0 40px 0 0;
  }
  .tabs-box .acord label i {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    text-align: center;
  }
  .tabs-box .acord label,
  .tabs-box .acord label i,
  .tabs-box .acord i.fa-chevron-circle-down {
    height: 40px;
    line-height: 40px;
  }
  .tabs-box .acord i.fa-chevron-circle-down {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 40px;
    text-align: center;
    -moz-transition: all 0.2s linear 0s;
    -webkit-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
  }

  .tabs-box .acord input {
    display: none;
  }

  .tabs-box .content {
    position: relative;
    overflow: hidden;
    -moz-transition: height 0.5s linear 0s;
    -webkit-transition: height 0.5s linear 0s;
    transition: height 0.5s linear 0s;
    height: 0;
    font-size: 14px;
    line-height: 22px;
    color: #e4e4e4;
    text-align: center;
  }

  .tabs-box .content span.square {
    display: block;
    position: absolute;
    left: 10px;
    top: -17px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
  }
  .tabs-box input[type='checkbox']:checked ~ div.content {
    height: 25vh;
    padding: 10px;
  }
  .tabs-box input[type='checkbox']:checked ~ i.fa-chevron-circle-down {
    transform: rotate(180deg);
  }
`;
