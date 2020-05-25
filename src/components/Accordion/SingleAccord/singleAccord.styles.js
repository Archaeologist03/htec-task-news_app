import styled from 'styled-components';
import { yellowColor } from '../../../styles/-variables';

export const SingleAccordContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;
  padding: 1rem 0rem;

  .category-link {
    color: ${yellowColor};
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-left: 0.5rem;
    color: ${yellowColor};
    z-index: 3;
  }

  .content {
    display: none;
  }

  .open {
    display: block;
  }
`;

// export const SingleAccordContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-bottom: 1px solid black;

//   .category-link {
//     color: ${yellowColor};
//     font-size: 1.3rem;
//     font-weight: bold;
//     padding-top: 1rem;
//     padding-left: 0.5rem;
//     color: ${yellowColor};
//     z-index: 3;
//   }

//   label {
//     position: relative;
//     z-index: 2;
//     display: block;
//     padding: 0 40px 0 0;
//   }

//   label i {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 40px;
//     text-align: center;
//   }

//   label,
//   label i,
//   i.fa-chevron-circle-down {
//     height: 40px;
//     line-height: 40px;
//   }

//   i.fa-chevron-circle-down {
//     position: absolute;
//     z-index: 2;
//     top: 0;
//     left: 0;
//     width: 40px;
//     text-align: center;
//     -moz-transition: all 0.2s linear 0s;
//     -webkit-transition: all 0.2s linear 0s;
//     transition: all 0.2s linear 0s;
//   }

//   input {
//     display: none;
//   }

//   .content {
//     position: relative;
//     overflow: hidden;
//     -moz-transition: height 0.5s linear 0s;
//     -webkit-transition: height 0.5s linear 0s;
//     transition: height 0.5s linear 0s;
//     height: 0;
//     font-size: 14px;
//     line-height: 22px;
//     color: #e4e4e4;
//     text-align: center;
//   }

//   .content span.square {
//     display: block;
//     position: absolute;
//     left: 10px;
//     top: -17px;
//     width: 20px;
//     height: 20px;
//     transform: rotate(45deg);
//   }

//   input[type='checkbox']:checked ~ div.content {
//     height: 25vh;
//     padding: 10px;
//   }

//   input[type='checkbox']:checked ~ i.fa-chevron-circle-down {
//     transform: rotate(180deg);
//   }
// `;
