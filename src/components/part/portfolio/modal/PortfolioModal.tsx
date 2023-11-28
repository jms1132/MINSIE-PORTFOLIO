import DisableScroll from '@/components/common/DisableScroll';
import Label from '@/components/common/Label';
// import Modal from '@/components/common/Modal';
import Assets from '@/assets/Assets';
import Icon from '@/components/common/Icon';
import Link from '@/components/common/Link';
import Modal from '@/components/common/Modal';
import { portfolio } from '@/model/Portfolio';
import { Theme } from '@/style/Theme';
import {
  HideScrollbarStyle,
  ScrollbarDefaultStyle,
} from '@/style/common.style';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, useMemo } from 'react';
import styled, { css } from 'styled-components';
import SummaryRow from './common/SummaryRow';

interface PortfolioModalProps {
  onClose?: () => void;
  portfolio: portfolio;
}
const PortfolioModal = (props: PortfolioModalProps): ReactElement => {
  const randomColor = useMemo(() => {
    return ['#F5B7B1', '#D7BDE2', '#AED6F1', '#F9E79F', '#A9DFBF', '#FAD7A0'];
  }, []);

  const headerContent = useMemo(() => {
    return (
      <DIV_Header>
        <span>project</span>
        <div className="header-title">{props.portfolio.title}</div>
      </DIV_Header>
    );
  }, [props.portfolio]);

  const mainContent = useMemo(() => {
    return (
      <DIV_MainContent>
        <img
          className="thumbnail-img"
          src={'./images/portfolio/img-portfolio-site.png'}
          alt=""
        />
        <div className="summary">
          <SummaryRow
            name={'SKILLS'}
            content={props.portfolio.skill.map((skill, index) => (
              <Label
                name={skill}
                key={index}
                styles={css`
                  background: ${randomColor[index % randomColor.length]};
                  color: ${Theme.Color.black};
                `}
              />
            ))}
          />
          <SummaryRow
            name={'TOOLS'}
            content={
              <Label
                name="Visudal Studio Code"
                styles={css`
                  background: #e5e7e9;
                `}
              />
            }
          />
          <SummaryRow
            name={'GitHub'}
            content={
              <Link
                href="https://github.com/jms1132/MINSIE-PORTFOLIO"
                target="_blank"
                styles={css`
                  text-decoration: underline;
                `}
              >
                https://github.com/jms1132/MINSIE-PORTFOLIO
              </Link>
            }
          />
          <SummaryRow
            name={'주요 기능'}
            content={
              '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다. React.js를 사용하여 모든 컴포넌트들을 재사용성이 가능하게끔 설계 및 개발 하였으며 Typescript를 사용하여 컴파일 단계에서의 안정성을 향상 시켰습니다. 메뉴 클릭과 관련된 이동을 위해 react-redux를 사용하게 되었습니다.'
            }
          />
        </div>
      </DIV_MainContent>
    );
  }, [props.portfolio.skill, randomColor]);

  return (
    <>
      <DisableScroll enable />
      <Modal
        open
        close={props.onClose}
        header={headerContent}
        content={mainContent}
        styles={modalStyle}
        closeButton={
          <Icon asset={Assets.closeThin16} color={Theme.Color.system.black} />
        }
      />
    </>
  );
};

const modalStyle = css`
  .modal-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    max-height: 90vh;
    width: 100%;
    background-color: ${Theme.Color.black};
    color: ${Theme.Color.white};
    border-radius: 8px;
    padding: 30px 50px;

    .modal-close-btn {
      display: none;
    }

    > main {
      display: block;
      overflow: auto;
      ${ScrollbarDefaultStyle}
    }
  }

  ${mobileMedia} {
    .modal-inner {
      width: 100%;
      height: 100%;
      max-height: 90%;
      max-width: 90%;
      background-color: ${Theme.Color.white};
      color: ${Theme.Color.black};
      padding: 30px 30px;

      .modal-close-btn {
        display: unset;
        position: absolute;
        top: 18px;
        right: 16px;
      }
      > main {
        ${HideScrollbarStyle}
      }
    }
  }
`;

const DIV_Header = styled.div`
  margin-bottom: 40px;
  span {
    font-size: 15px;
  }
  .header-title {
    ${Theme.Typography.h1};
    font-family: 'Noto Sans';
  }

  ${mobileMedia} {
    margin-bottom: 20px;

    span {
      font-size: 15px;
    }
    .header-title {
      ${Theme.Typography.h2};
    }
  }
`;

const DIV_MainContent = styled.div`
  padding-right: 10px;
  .thumbnail-img {
    width: 100%;
    margin-bottom: 100px;
    border-radius: 8px;
  }

  .summary {
  }

  ${mobileMedia} {
    .thumbnail-img {
      margin-bottom: 30px;
    }

    .summary {
      display: flex;
      flex-direction: column;
      gap: 14px;
      ${Theme.Typography.subtitle3};
      .label {
        color: ${Theme.Color.black};
      }
    }
  }
`;
export default PortfolioModal;
