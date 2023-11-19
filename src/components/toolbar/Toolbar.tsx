import { Theme } from '@/style/Theme';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import Link from '../common/Link';
interface ToolbarProps {
  mobileColored: boolean;
}
const Toolbar = (props: ToolbarProps) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const navigate = useNavigate();

  const hash = window.location.hash;
  const updateScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollY]);

  const moveScroll = (position: number) => {
    navigate('/');
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  // const findSelected = useMemo(()=> {}, [])

  const findSelected = (value: string): boolean => {
    if (hash.includes(value)) {
      return true;
    }
    return false;
  };

  return (
    <DIV_Toolbar className={`${scrollY > 80 ? 'scroll' : ''}`}>
      <div
        className={`content-max toolbar-row ${
          props.mobileColored ? 'm-colored' : ''
        } `}
      >
        <Link href="/" className="toolbar-title">
          MINSIE.
        </Link>
        <div className="toolbar-menu">
          <Link
            onClick={() => moveScroll(0)}
            className={hash === '' ? 'selected' : ''}
          >
            소개
          </Link>
          <Link
            href="#skill"
            className={findSelected('skill') ? 'selected' : ''}
          >
            기술스택
          </Link>
          <Link
            href="#portfolio"
            className={findSelected('portfolio') ? 'selected' : ''}
          >
            포트폴리오
          </Link>
          <Link
            href="#contact"
            className={findSelected('contact') ? 'selected' : ''}
          >
            CONTACT
          </Link>
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
  transition: box-shadow 0.25s ease;

  &.scroll {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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
        &:last-child {
          ${Theme.Typography.extraBold};
        }
      }
      .selected {
        color: #fe9a2e;
      }
    }
  }
`;
export default Toolbar;
