import Assets from '@/assets/Assets';
import { menuArray } from '@/model/Menu';
import { useDeviceSelector } from '@/store/device/Selector';
import { setPagePosition } from '@/store/pagePosition/PagePosition';
import { Theme } from '@/style/Theme';
import { HoverDefaultstyle } from '@/style/common.style';
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

  useEffect(() => {
    const updateScroll = () => {
      dispatch(setPagePosition(''));

      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollY, dispatch]);

  const movePagePosition = (page: string) => {
    dispatch(setPagePosition(page));
    setOpenSideBar(false);
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
            {isMobile ? (
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
                {menuArray.map((menu, idx) => (
                  <Link
                    key={`menu-${idx}`}
                    onClick={() => movePagePosition(menu.position)}
                  >
                    {menu.name}
                  </Link>
                ))}
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
              <img
                className="side-bar-title"
                src={'./images/common/img-profile.png'}
              />

              <div className="side-bar-menu">
                {menuArray.map((menu, idx) => (
                  <Link
                    className="menu-item"
                    key={`bar-menu-${idx}`}
                    onClick={() => movePagePosition(menu.position)}
                  >
                    <img src={menu.icon} alt="" />
                    {menu.m_name}
                  </Link>
                ))}
              </div>
            </div>
          </DIV_SideBar>
        </div>
      </DIV_Toolbar>
    </>
  );
};

const DIV_Toolbar = styled.div`
  &.scroll {
    background-color: ${Theme.Color.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    .toolbar-area {
      .toolbar-row {
        color: ${Theme.Color.black};
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
        ${Theme.Typography.h1};
        ${Theme.Typography.bold};
      }
      .toolbar-menu {
        display: flex;
        gap: 40px;
        > * {
          font-size: 18px;

          &:nth-child(3),
          &:nth-child(5) {
            ${Theme.Typography.extraBold};
          }
          &:hover {
            color: ${Theme.Color.primary};
          }
        }
      }
    }
  }

  ${tabletMedia} {
    .toolbar-area {
      padding: 18px 40px;
      .toolbar-row {
        .toolbar-title {
        }
        .toolbar-menu {
          flex: 1;
          justify-content: end;
          display: flex;
          gap: 4%;
        }
      }
    }
  }

  ${mobileMedia} {
    .toolbar-area {
      padding: 15px 20px;
      .toolbar-row {
        .toolbar-title {
          ${Theme.Typography.h2};
        }
        .menu-icon {
          width: 30px;
          opacity: 0.7;
          ${HoverDefaultstyle};
          &:hover {
            color: ${Theme.Color.primary};
          }
        }
      }
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
    background-color: ${Theme.Color.white};
    height: calc(100% - 16px);
    right: -70%;
    overflow: scroll;
    position: absolute;
    transition: right 0.3s ease;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow: auto;
    margin: 8px;
    border-radius: 16px;
    padding: 50px 0 0px;
    &.on {
      right: 0;
    }

    .side-bar-title {
      border-radius: 50%;
      width: 80px;
      height: 80px;

      margin: 0 auto;
    }
    .side-bar-menu {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 16px;
      .menu-item {
        display: flex;
        align-items: center;
        gap: 10px;
        ${Theme.Typography.h3};
        ${Theme.Typography.extraBold};
        padding: 5px 16px;

        &:hover {
          color: ${Theme.Color.white};
          background-color: ${Theme.Color.primary};
          border-radius: 16px;
        }
        img {
          width: 30px;
        }
      }
    }
  }
`;
export default Toolbar;
