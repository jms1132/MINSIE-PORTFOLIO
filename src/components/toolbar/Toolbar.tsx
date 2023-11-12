import { Theme } from '@/style/Theme';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
interface ToolbarProps {
  mobileColored: boolean;
}
const Toolbar = (props: ToolbarProps) => {
  const [scrollY, setScrollY] = useState<number>(0);

  const updateScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <DIV_Toolbar className={`${scrollY > 80 ? 'scroll' : ''}`}>
      <div
        className={`content-max toolbar-row ${
          props.mobileColored ? 'm-colored' : ''
        } `}
      >
        <div className="toolbar-title">MINSIE.</div>
        <div className="toolbar-menu">
          <div>소개</div>
          <div>기술스택</div>
          <div>포트폴리오</div>
          <div>연락처</div>
        </div>
      </div>
    </DIV_Toolbar>
  );
};

const DIV_Toolbar = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  color: hsla(0, 0%, 100%, 0.7);

  &.scroll {
    background-color: #ffffff;
    color: #000000;
  }

  .toolbar-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toolbar-title {
      cursor: pointer;
      ${Theme.Typography.fontHeading};
      ${Theme.Typography.h1};
      ${Theme.Typography.bold};
    }
    .toolbar-menu {
      display: flex;
      gap: 40px;
      > * {
        font-size: 18px;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
export default Toolbar;
