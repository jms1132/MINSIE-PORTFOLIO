import Assets from '@/assets/Assets';
import { useDeviceSelector } from '@/store/device/Selector';
import { setPagePosition } from '@/store/pagePosition/PagePosition';
import { Theme } from '@/style/Theme';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import DisableScroll from '../common/DisableScroll';
import Icon from '../common/Icon';
import Link from '../common/Link';

const Toolbar = () => {
  const dispatch = useDispatch();

  const { isMobile, isTablet } = useDeviceSelector();
  const [scrollY, setScrollY] = useState<number>(0);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const updateScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollY]);

  const movePagePosition = (page: string) => {
    dispatch(setPagePosition(page));
  };

  return (
    <>
      <DisableScroll enable={openSideBar && (isMobile || isTablet)} />

      <DIV_Toolbar className={scrollY > 80 ? 'scroll' : ''}>
        <div className={`toolbar-area`}>
          <div className={`toolbar-row `}>
            <Link
              href="/"
              onClick={() => dispatch(setPagePosition(''))}
              className="toolbar-title"
            >
              MINSIE.
            </Link>
            {isTablet || isMobile ? (
              <Icon
                className="menu-icon"
                onClick={() => setOpenSideBar(true)}
                asset={Assets.hamburger36}
                color={
                  scrollY > 80 ? Theme.Color.black : Theme.Color.system.white
                }
              />
            ) : (
              <div className="toolbar-menu">
                <Link onClick={() => movePagePosition('introduce')}>소개</Link>
                <Link onClick={() => movePagePosition('skill')}>기술스택</Link>
                <Link onClick={() => movePagePosition('portfolio')}>
                  포트폴리오
                </Link>
                <Link onClick={() => movePagePosition('contact')}>CONTACT</Link>
              </div>
            )}
          </div>

          <DIV_SideBar
            className={`side-bar-wrap ${openSideBar ? 'open' : ''}`}
            onClick={() => setOpenSideBar(false)}
          >
            <div
              className={`side-bar ${openSideBar ? 'on' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              sideBar
            </div>
          </DIV_SideBar>
        </div>
      </DIV_Toolbar>
    </>
  );
};

const DIV_Toolbar = styled.div`
  &.scroll {
    background-color: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    .toolbar-area {
      .toolbar-row {
        color: #000000;
      }
    }
  }

  .toolbar-area {
    box-sizing: border-box;
    transition: box-shadow 0.25s ease;

    margin: 0 auto;
    padding: 20px 80px;
    position: relative;
    width: 100%;
    max-width: 1440px;

    .toolbar-row {
      color: hsla(0, 0%, 100%, 0.7);
      display: flex;
      align-items: center;
      justify-content: space-between;

      .toolbar-title {
        cursor: pointer;
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
          &:hover {
            color: #fe9a2e;
          }
        }
      }
    }
  }

  ${tabletMedia} {
    .toolbar-area {
      padding: 20px 60px;
      .menu-icon {
        opacity: 0.7;
        cursor: pointer;
        &:hover {
          color: #fe9a2e;
        }
      }
    }
  }

  ${mobileMedia} {
    .toolbar-area {
      padding: 15px 20px;
    }
  }
`;

const DIV_SideBar = styled.div`
  background-color: rgb(0 0 0 / 0.5);
  display: flex;
  height: 100%;
  right: 0;
  margin-top: 0;
  position: fixed;
  top: 0;
  transition: visibility 0.3s;
  visibility: hidden;
  width: 100%;
  z-index: 100;

  &.open {
    visibility: initial;
  }

  .side-bar {
    background-color: #fff;
    height: 100%;
    right: -50%;
    overflow: scroll;
    position: absolute;
    transition: right 0.3s ease;
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &.on {
      right: 0;
    }

    padding: 29px 24px 0px;
  }
`;
export default Toolbar;
