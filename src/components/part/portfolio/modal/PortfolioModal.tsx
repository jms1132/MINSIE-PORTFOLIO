// import DisableScroll from '@/components/common/DisableScroll';
// import Label from '@/components/common/Label';
// // import Modal from '@/components/common/Modal';
// import { portfolio } from '@/model/Portfolio';
// import { Theme } from '@/style/Theme';
// import { ScrollbarDefaultStyle } from '@/style/common.style';
// import { mobileMedia } from '@/style/deviceWidth';
// import { ReactElement, useMemo } from 'react';
// import styled, { css } from 'styled-components';
// import SummaryRow from './common/SummaryRow';

// interface PortfolioModalProps {
//   onClose?: () => void;
//   portfolio: portfolio;
// }
// const PortfolioModal = (props: PortfolioModalProps): ReactElement => {
//   const randomColor = useMemo(() => {
//     return ['#F1948A', '#C39BD3', '#7FB3D5', '#148F77', '#F7DC6F', '#E59866'];
//   }, []);

//   const headerContent = useMemo(() => {
//     return (
//       <DIV_Header>
//         <span>project</span>
//         <div className="header-title">{props.portfolio.title}</div>
//       </DIV_Header>
//     );
//   }, [props.portfolio]);

//   const mainContent = useMemo(() => {
//     return (
//       <DIV_MainContent>
//         <img src={'./images/portfolio/img-portfolio-site.png'} alt="" />
//         <div className="summary">
//           <SummaryRow
//             name={'SKILL'}
//             content={props.portfolio.skill.map((skill) =>
//               randomColor.map((color, idx) => (
//                 <Label
//                   name={skill}
//                   key={idx}
//                   styles={css`
//                     background: ${color};
//                   `}
//                 />
//               ))
//             )}
//           />
//         </div>
//       </DIV_MainContent>
//     );
//   }, [props.portfolio.skill, randomColor]);

//   return (
//     <>
//       <DisableScroll enable />
//       <Modal
//         open
//         close={props.onClose}
//         header={headerContent}
//         content={mainContent}
//         styles={modalStyle}
//         closeButton={<img src={'./images/common/close-thin16.svg'} />}
//       />
//     </>
//   );
// };

// const modalStyle = css`
//   .modal-inner {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     max-width: 80%;
//     max-height: 90vh;
//     width: 100%;
//     background-color: ${Theme.Color.black};
//     color: ${Theme.Color.white};
//     border-radius: 8px;
//     padding: 30px 50px;

//     .modal-close-btn {
//       display: none;
//     }

//     > main {
//       display: block;
//       overflow: auto;
//       ${ScrollbarDefaultStyle}
//     }
//   }

//   ${mobileMedia} {
//     .modal-inner {
//       width: 100%;
//       height: 100%;
//       max-height: initial;
//       max-width: initial;
//       background-color: ${Theme.Color.white};
//       color: ${Theme.Color.black};
//       padding: 30px 30px;
//       border-radius: 0;

//       .modal-close-btn {
//         display: unset;
//         position: absolute;
//         top: 18px;
//         right: 16px;
//       }

//       > main {
//         overflow: auto;
//       }
//     }
//   }
// `;

// const DIV_Header = styled.div`
//   margin-bottom: 40px;
//   span {
//     font-size: 15px;
//   }
//   .header-title {
//     ${Theme.Typography.h1};
//     font-family: 'Noto Sans';
//   }
// `;

// const DIV_MainContent = styled.div`
//   padding-right: 10px;
//   img {
//     width: 100%;
//     margin-bottom: 100px;
//     border-radius: 8px;
//   }
//   .summary {
//   }
//   ${mobileMedia} {
//     img {
//       margin-bottom: 30px;
//     }
//   }
// `;
// export default PortfolioModal;
